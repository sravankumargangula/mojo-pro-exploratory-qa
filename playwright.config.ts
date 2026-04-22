import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for MOJO Pro Exploratory QA
 * Login: https://accounts.joveo.com/login
 * App:   https://mojopro.joveo.com
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: 1,  // always sequential — tests share a login session
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    [
      'allure-playwright',
      {
        detail: true,
        resultsDir: 'allure-results',
        suiteTitle: false,
        environmentInfo: {
          App: 'MOJO Pro',
          Base_URL: 'https://mojopro.joveo.com',
          Auth_URL: 'https://accounts.joveo.com/login',
          Browser: 'Chromium',
          JIRA_Ticket: 'QA-3303',
        },
      },
    ],
  ],
  use: {
    baseURL: 'https://accounts.joveo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: process.env.CI ? 'off' : 'retain-on-failure',
    headless: true,
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  outputDir: 'test-results/',
});
