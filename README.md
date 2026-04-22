# MOJO Pro — Exploratory QA Framework

Automated end-to-end test suite for [MOJO Pro](https://mojopro.joveo.com) built with
**Playwright Test Agents** (Planner → Generator → Healer loop).  
No manual intervention required. Reports published via **Allure**.

> JIRA: [QA-3303](https://joveojira.atlassian.net/browse/QA-3303)

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 20 | `brew install node` |
| Java | 21 | `brew install openjdk@21` |
| Chromium | latest | `npx playwright install --with-deps chromium` |

---

## Quick Start (Local)

```bash
# 1. Clone & install
git clone <repo-url>
cd "Exploratory AI-QA"
npm install

# 2. Set up credentials (never commit .env)
cp .env.example .env
# edit .env with real values if different from defaults

# 3. Install browsers
npx playwright install --with-deps chromium

# 4. Run full suite + open Allure report
npm run allure
```

---

## Three-Step Seed Flow

Every test bootstraps through the same entry flow:

1. Navigate to `https://accounts.joveo.com/login`
2. Login — `joveotest@yopmail.com` / `JoveoTest@321`
3. Click **MOJO Pro** → lands on `https://mojopro.joveo.com/joveo-test/overview`

---

## Test Suites (21 tests)

| Suite | File | Tests |
|-------|------|-------|
| Authentication | `tests/auth/login.spec.ts` | 4 |
| Session & Security | `tests/auth/session.spec.ts` | 2 |
| Overview Dashboard | `tests/overview/dashboard.spec.ts` | 6 |
| Navigation Menu | `tests/navigation/menu.spec.ts` | 5 |
| Header Controls | `tests/navigation/header.spec.ts` | 3 |
| Seed | `tests/seed.spec.ts` | 1 |

---

## Run Commands

### Local

```bash
npm run test                # Full suite (headless)
npm run test:headed         # Full suite in visible browser, 5s pause between tests
npm run test:ui             # Interactive Playwright UI mode

# Run a specific suite
npx playwright test tests/auth/
npx playwright test tests/overview/
```

### Allure Report (Local)

```bash
npm run allure              # Run + generate + open report (one command)
npm run allure:headed       # Headed run + report
npm run allure:run          # Tests only → produces allure-results/
npm run allure:generate     # Generate HTML from allure-results/
npm run allure:open         # Open last generated report
npm run allure:serve        # Live dashboard (auto-refreshes)
```

### CI / Production

```bash
npm run test:ci             # Used by GitHub Actions (--workers=1 --retries=2)
npm run allure:ci           # CI run + generate report (no open)
```

---

## CI/CD Pipeline

The pipeline lives in `.github/workflows/mojo-pro-qa.yml`.

### Triggers

| Event | When |
|-------|------|
| `push` | Every commit to `main` / `develop` |
| `pull_request` | Every PR targeting `main` / `develop` |
| `schedule` | Nightly at **02:00 UTC** (Mon–Fri) |
| `workflow_dispatch` | Manual trigger from GitHub Actions UI |

### What the Pipeline Does

```
┌─────────────────────────────────────────────────────┐
│  4 parallel shards (Auth / Overview / Nav / Seed)   │
│  ├─ Set up Node 20 + Java 21                        │
│  ├─ npm ci + playwright install chromium            │
│  ├─ Run tests (--workers=1 --retries=2)             │
│  └─ Upload allure-results as artifact               │
└──────────────────┬──────────────────────────────────┘
                   │ all shards complete (always)
                   ▼
┌─────────────────────────────────────────────────────┐
│  allure-report job                                  │
│  ├─ Download & merge all 4 shard result folders     │
│  ├─ Restore Allure history from gh-pages branch     │
│  ├─ npx allure generate → allure-report/            │
│  ├─ Upload allure-report as downloadable artifact   │
│  ├─ Publish to GitHub Pages (main branch only)      │
│  ├─ Write GitHub Actions Job Summary (pass/fail)    │
│  └─ Comment results table on Pull Requests          │
└─────────────────────────────────────────────────────┘
```

### Required GitHub Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Value |
|--------|-------|
| `TEST_EMAIL` | `joveotest@yopmail.com` |
| `TEST_PASSWORD` | `JoveoTest@321` |

> `GITHUB_TOKEN` is automatically provided by GitHub — no setup needed.

### Manual Trigger Options

From **Actions → MOJO Pro QA Suite → Run workflow** you can select:
- **Suite** — run only one suite (Auth / Overview / Navigation / Seed)
- **Headed** — flag for self-hosted runners with display

---

## Playwright Agents

Agent definitions are in `.github/agents/`:

| Agent | Description |
|-------|-------------|
| `playwright-test-planner` | Explores app, produces `specs/mojo-pro-test-plan.md` |
| `playwright-test-generator` | Reads plan, generates `.spec.ts` test files |
| `playwright-test-healer` | Runs suite, auto-repairs failing tests |

Regenerate agent definitions after updating Playwright:
```bash
npx playwright init-agents --loop=vscode
```

---

## Project Structure

```
Exploratory AI-QA/
├── .github/
│   ├── workflows/
│   │   ├── mojo-pro-qa.yml         ← Main CI/CD pipeline
│   │   └── copilot-setup-steps.yml
│   └── agents/                     ← Playwright Agent definitions
├── playwright.config.ts            ← Config: Allure + HTML reporters
├── fixtures.ts                     ← Page objects + mojoproPage fixture
├── package.json                    ← All npm scripts
├── .env.example                    ← Credential template
├── tests/
│   ├── seed.spec.ts
│   ├── auth/
│   │   ├── login.spec.ts
│   │   └── session.spec.ts
│   ├── overview/
│   │   └── dashboard.spec.ts
│   └── navigation/
│       ├── menu.spec.ts
│       └── header.spec.ts
├── specs/
│   └── mojo-pro-test-plan.md       ← Human-readable test plan
├── allure-results/                 ← Auto-generated (git-ignored)
└── allure-report/                  ← Auto-generated (git-ignored)
```

---

## References

- [Playwright Test Agents](https://playwright.dev/docs/test-agents)
- [Allure Playwright Reporter](https://allurereport.org/docs/playwright/)
- JIRA: [QA-3303](https://joveojira.atlassian.net/browse/QA-3303)
