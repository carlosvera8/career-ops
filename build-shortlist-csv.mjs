#!/usr/bin/env node
/**
 * Scans all reports and exports data/reports.csv with one row per report.
 * Run: node build-shortlist-csv.mjs
 * Auto-called at session end via Stop hook.
 */

import fs from 'fs';
import path from 'path';

const REPORTS_DIR = './reports';
const CSV_OUT = './data/reports.csv';

function parseReport(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').slice(0, 20);

  const get = (key) => {
    const line = lines.find(l => l.toLowerCase().startsWith(`**${key.toLowerCase()}:**`));
    return line ? line.replace(/^\*\*[^*]+:\*\*\s*/, '').trim() : '';
  };

  const scoreRaw = get('score');
  const scoreMatch = scoreRaw.match(/^(\d+(\.\d+)?)\s*\/\s*5/);
  const score = scoreMatch ? parseFloat(scoreMatch[1]).toFixed(1) : scoreRaw || '';

  const titleLine = lines.find(l => l.startsWith('# ')) || '';
  let company = '', role = '';
  const evalMatch = titleLine.match(/^#\s+Evaluation:\s+(.+?)\s+[—–-]+\s+(.+)$/);
  const numMatch = titleLine.match(/^#\s+\d+\s+[—–-]+\s+(.+?)\s+[|]\s+(.+)$/);
  if (evalMatch) {
    company = evalMatch[1].trim();
    role = evalMatch[2].trim();
  } else if (numMatch) {
    company = numMatch[1].trim();
    role = numMatch[2].trim();
  } else {
    const slug = path.basename(filePath, '.md').replace(/^\d+-/, '').replace(/-\d{4}-\d{2}-\d{2}$/, '');
    company = slug.replace(/-/g, ' ');
    role = titleLine.replace(/^#+\s*/, '').trim();
  }

  const filename = path.basename(filePath, '.md');
  const num = filename.match(/^(\d+)/)?.[1] || '';

  return {
    num,
    date: get('date'),
    company,
    role,
    score,
    url: get('url'),
    legitimacy: get('legitimacy'),
    archetype: get('archetype'),
    verification: get('verification'),
    report: filename + '.md',
  };
}

const files = fs.readdirSync(REPORTS_DIR)
  .filter(f => f.endsWith('.md'))
  .sort();

const rows = [];
for (const file of files) {
  try {
    const row = parseReport(path.join(REPORTS_DIR, file));
    if (row) rows.push(row);
  } catch {
    // skip unreadable files
  }
}

rows.sort((a, b) => a.num.padStart(6, '0').localeCompare(b.num.padStart(6, '0')));

const escape = (v) => `"${String(v).replace(/"/g, '""')}"`;

const headers = ['#', 'Date', 'Company', 'Role', 'Score', 'URL', 'Legitimacy', 'Archetype', 'Verification', 'Report'];
const csvLines = [
  headers.join(','),
  ...rows.map(r => [r.num, r.date, r.company, r.role, r.score, r.url, r.legitimacy, r.archetype, r.verification, r.report].map(escape).join(','))
];

fs.writeFileSync(CSV_OUT, csvLines.join('\n') + '\n');
console.log(`Wrote ${rows.length} rows to ${CSV_OUT}`);
