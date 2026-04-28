#!/usr/bin/env node
// csv-to-batch.mjs — Load a CSV of URLs into batch-input.tsv
// Usage: node csv-to-batch.mjs <input.csv>

import { readFileSync, existsSync, writeFileSync } from 'fs';

const csvPath = process.argv[2];
if (!csvPath) {
  console.error('Usage: node csv-to-batch.mjs <input.csv>');
  process.exit(1);
}

const BATCH_INPUT = 'batch/batch-input.tsv';

function splitCSVLine(line) {
  const cols = [];
  let cur = '', inQuotes = false;
  for (const ch of line) {
    if (ch === '"') { inQuotes = !inQuotes; continue; }
    if (ch === ',' && !inQuotes) { cols.push(cur); cur = ''; continue; }
    cur += ch;
  }
  cols.push(cur);
  return cols;
}

function parseURLs(content) {
  const lines = content.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];

  const firstLower = lines[0].toLowerCase();
  if (firstLower.includes('url')) {
    const headers = splitCSVLine(lines[0]).map(h => h.trim().toLowerCase());
    const urlIdx = headers.findIndex(h => h === 'url');
    if (urlIdx === -1) { console.error('No "url" column found in header.'); process.exit(1); }
    return lines.slice(1)
      .map(l => splitCSVLine(l)[urlIdx]?.trim())
      .filter(u => u?.startsWith('http'));
  }

  // No header — treat each line as a URL
  return lines.map(l => l.trim()).filter(u => u.startsWith('http'));
}

// Read existing batch-input.tsv to get max ID and known URLs
let maxId = 0;
const existingUrls = new Set();

if (existsSync(BATCH_INPUT)) {
  const lines = readFileSync(BATCH_INPUT, 'utf8').trim().split(/\r?\n/).slice(1);
  for (const line of lines) {
    if (!line.trim()) continue;
    const [id, url] = line.split('\t');
    if (id && /^\d+$/.test(id)) maxId = Math.max(maxId, Number(id));
    if (url?.trim()) existingUrls.add(url.trim());
  }
}

const urls = parseURLs(readFileSync(csvPath, 'utf8'));

let nextId = maxId + 1, added = 0, skipped = 0;
const newLines = [];

for (const url of urls) {
  if (existingUrls.has(url)) { skipped++; continue; }
  newLines.push(`${nextId}\t${url}\tcsv-import\t`);
  existingUrls.add(url);
  nextId++;
  added++;
}

if (!existsSync(BATCH_INPUT)) {
  writeFileSync(BATCH_INPUT, 'id\turl\tsource\tnotes\n');
}

if (newLines.length > 0) {
  const existing = readFileSync(BATCH_INPUT, 'utf8');
  writeFileSync(BATCH_INPUT, existing.trimEnd() + '\n' + newLines.join('\n') + '\n');
}

console.log(`Added: ${added} | Skipped: ${skipped} duplicates`);
if (added > 0) {
  console.log(`IDs assigned: ${maxId + 1}–${maxId + added}`);
  console.log(`\nNext step: ./batch/batch-runner.sh --parallel 3`);
}
