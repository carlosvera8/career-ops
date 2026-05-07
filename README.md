# Career-Ops — AI Job Search Pipeline

<p align="center">
  <em>Companies use AI to filter candidates. I gave myself AI to <em>choose</em> companies.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white" alt="Claude Code">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT">
</p>

---

## What Is This

Career-Ops is my personal AI-powered job search pipeline. It turns Claude Code into a full command center for evaluating offers, scanning portals, and tracking applications — so I spend time on the best opportunities instead of manually triaging hundreds of listings.

It evaluates each job against my CV and profile using a structured A-F scoring system. Anything under 4.0/5 gets a hard pass. **This is a filter, not a spray-and-pray tool.**

> The system is agentic: Claude navigates career pages with Playwright, reasons about fit (not keyword matching), and adapts output based on my CV and career goals.

---

## My Profile

| Field | Value |
|---|---|
| Name | Misael Carlos Vera |
| Current Role | Principal Data Scientist @ Acxiom |
| Target | Senior / Lead / Principal Data Scientist |
| Location | Chambersburg, PA — Remote only |
| Comp Floor | $200K base (non-negotiable) |
| LinkedIn | [linkedin.com/in/misael-carlos-vera](https://www.linkedin.com/in/misael-carlos-vera/) |
| GitHub | [github.com/carlosvera8](https://github.com/carlosvera8) |

---

## Features

| Feature | Description |
|---------|-------------|
| **Auto-Pipeline** | Paste a URL → full evaluation + report + tracker entry |
| **6-Block Evaluation** | CV match, level strategy, comp research, gaps, STAR+R interview prep |
| **Portal Scanner** | 45+ pre-configured companies across Greenhouse, Ashby, Lever, Wellfound |
| **Batch Processing** | Parallel `claude -p` workers — evaluate 10+ offers at once, resumable |
| **ATS PDF Generation** | Keyword-injected CVs per listing |
| **Reports CSV** | Auto-rebuilds `data/reports.csv` (all reports) at session end |
| **Dashboard TUI** | Terminal UI to browse, filter, and sort the pipeline |
| **Pipeline Integrity** | Dedup, status normalization, health checks |

---

## Quick Start

```bash
# 1. Clone and install
git clone https://github.com/carlosvera8/career-ops.git
cd career-ops && npm install
npx playwright install chromium

# 2. Configure (already done — cv.md and config/profile.yml are set)

# 3. Open Claude Code
claude

# Paste a job URL to evaluate, or run:
# /career-ops scan
```

---

## Usage

```
/career-ops                → Show all commands
/career-ops {URL or JD}    → Full auto-pipeline (evaluate + PDF + tracker)
/career-ops scan           → Scan portals for new offers
/career-ops pdf            → Generate ATS-optimized CV
/career-ops batch          → Batch evaluate multiple offers
/career-ops tracker        → View application status
/career-ops pipeline       → Process pending URLs
/career-ops deep           → Deep company research
/career-ops training       → Evaluate a course or cert
/career-ops project        → Evaluate a portfolio project
```

Just paste a job URL or description directly — career-ops auto-detects and runs the full pipeline.

---

## Export to CSV

```bash
# All reports as a CSV — one row per evaluation (auto-rebuilds at session end)
node build-shortlist-csv.mjs
# → data/reports.csv
```

Columns: `#, Date, Company, Role, Score, URL, Legitimacy, Archetype, Verification, Report`

---

## Batch Processing

```bash
# Add offers to batch/batch-input.tsv, then:
./batch/batch-runner.sh                  # Sequential
./batch/batch-runner.sh --parallel 3    # 3 concurrent workers
./batch/batch-runner.sh --retry-failed  # Retry failed only
./batch/batch-runner.sh --min-score 3.5 # Skip PDF/tracker below 3.5

npm run merge    # Merge tracker additions after batch
npm run verify   # Check pipeline integrity
```

The batch is resumable — re-running skips completed offers automatically.

---

## How It Works

```
Paste a job URL or description
        │
        ▼
┌──────────────────┐
│  Archetype       │  Classifies role type against target archetypes
│  Detection       │
└────────┬─────────┘
         │
┌────────▼─────────┐
│  A-F Evaluation  │  Match, gaps, comp research, STAR stories
│  (reads cv.md)   │
└────────┬─────────┘
         │
    ┌────┼────┐
    ▼    ▼    ▼
 Report  PDF  Tracker + reports.csv
```

---

## Project Structure

```
career-ops/
├── CLAUDE.md                    # Agent instructions
├── cv.md                        # CV (source of truth)
├── article-digest.md            # Proof points
├── config/
│   └── profile.yml              # Personal profile (targets, comp, narrative)
├── modes/                       # Skill modes
│   ├── _shared.md               # Shared context
│   ├── _profile.md              # Personal overrides
│   ├── evaluate.md              # Evaluation logic
│   ├── pdf.md                   # PDF generation
│   ├── scan.md                  # Portal scanner
│   └── ...
├── portals.yml                  # Company and query config
├── build-shortlist-csv.mjs      # Builds data/shortlist.csv (≥4.0 offers)
├── export-csv.mjs               # Exports full tracker to CSV
├── scan.mjs                     # Zero-token portal scanner
├── batch/
│   ├── batch-runner.sh          # Orchestrator
│   ├── batch-prompt.md          # Worker prompt
│   └── batch-input.tsv          # Input offers
├── dashboard/                   # Go TUI pipeline viewer
├── data/                        # Tracking data (gitignored)
│   ├── reports.csv              # Auto-generated CSV of all reports
│   ├── pipeline.md              # Pending URLs inbox
│   └── applications.md          # Full application tracker
├── reports/                     # Evaluation reports (gitignored)
└── output/                      # Generated PDFs and CSVs (gitignored)
```

---

## Tech Stack

- **Agent**: Claude Code with custom skills and modes
- **PDF**: Playwright + HTML template (ATS-optimized)
- **Scanner**: Playwright + Greenhouse/Ashby/Lever APIs
- **Dashboard**: Go + Bubble Tea + Lipgloss
- **Data**: Markdown + YAML + TSV

---

## Ethical Use

- **Never submit an application without reviewing it first.**
- Score below 4.0/5 → do not apply. Quality over volume.
- Always verify the posting is still active before applying.

---

## License

MIT
