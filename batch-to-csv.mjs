#!/usr/bin/env node
// batch-to-csv.mjs — Export high-scoring jobs from a completed batch run
// Usage: node batch-to-csv.mjs [--min-score 4.0]

import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);
let minScore = 4.0;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--min-score' && args[i + 1]) minScore = parseFloat(args[i + 1]);
}

const STATE_FILE = 'batch/batch-state.tsv';
const LOGS_DIR = 'batch/logs';
const OUTPUT_FILE = 'output/worth-applying.csv';

if (!existsSync(STATE_FILE)) {
  console.error('No batch-state.tsv found. Run the batch first.');
  process.exit(1);
}

// Extract the last JSON object containing "status" from worker log output
function extractJSON(text) {
  const idx = text.lastIndexOf('"status"');
  if (idx === -1) return null;
  const start = text.lastIndexOf('{', idx);
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}' && --depth === 0) {
      try { return JSON.parse(text.slice(start, i + 1)); } catch { return null; }
    }
  }
  return null;
}

const stateLines = readFileSync(STATE_FILE, 'utf8').trim().split(/\r?\n/).slice(1);
const results = [];

for (const line of stateLines) {
  if (!line.trim()) continue;
  const [id, url, status, , , report_num, score] = line.split('\t');
  if (status !== 'completed') continue;
  const scoreNum = parseFloat(score);
  if (isNaN(scoreNum) || scoreNum < minScore) continue;

  let company = 'Unknown', role = 'Unknown', report = '';
  const logFile = join(LOGS_DIR, `${report_num}-${id}.log`);
  if (existsSync(logFile)) {
    const json = extractJSON(readFileSync(logFile, 'utf8'));
    if (json) {
      company = json.company || company;
      role = json.role || role;
      report = json.report || '';
    }
  }

  results.push({ company, role, score: scoreNum, url, report });
}

if (results.length === 0) {
  console.log(`No completed jobs scored >= ${minScore}/5.`);
  process.exit(0);
}

results.sort((a, b) => b.score - a.score);

const escape = v => `"${String(v).replace(/"/g, '""')}"`;
const rows = results.map(r =>
  [r.company, r.role, `${r.score}/5`, r.url, r.report].map(escape).join(',')
);
const csv = ['company,role,score,url,report', ...rows].join('\n') + '\n';

mkdirSync('output', { recursive: true });
writeFileSync(OUTPUT_FILE, csv);

console.log(`\n${results.length} job(s) scored >= ${minScore}/5 → ${OUTPUT_FILE}`);
console.log('\nTop matches:');
results.slice(0, 5).forEach(r => console.log(`  ${r.score}/5  ${r.company} — ${r.role}`));
