# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: overview/dashboard.spec.ts >> Overview Dashboard >> 2.4 Date Range Toggle — This Month dropdown
- Location: tests/overview/dashboard.spec.ts:50:7

# Error details

```
TimeoutError: locator.fill: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('input[type="email"], input[type="text"]').first()

```

# Page snapshot

```yaml
- heading "504 Gateway Time-out" [level=1] [ref=e3]
```

# Test source

```ts
  1   | import { test as base, expect, Page } from '@playwright/test';
  2   | 
  3   | export { expect };
  4   | 
  5   | export const LOGIN_URL = 'https://accounts.joveo.com/login';
  6   | export const PRODUCTS_URL = 'https://accounts.joveo.com/products';
  7   | export const MOJO_PRO_URL = 'https://mojopro.joveo.com';
  8   | export const ACCOUNT_SLUG = 'joveo-test';
  9   | 
  10  | export const TEST_CREDENTIALS = {
  11  |   email: process.env.TEST_EMAIL ?? 'joveotest@yopmail.com',
  12  |   password: process.env.TEST_PASSWORD ?? 'JoveoTest@321',
  13  | };
  14  | 
  15  | /**
  16  |  * Page Object: Login & Product Selection
  17  |  */
  18  | export class AuthPage {
  19  |   constructor(readonly page: Page) {}
  20  | 
  21  |   async login() {
  22  |     // Step 1 — Navigate to login
  23  |     await this.page.goto(LOGIN_URL);
  24  |     await this.page.waitForLoadState('domcontentloaded');
  25  | 
  26  |     // Step 2 — Fill email (first textbox)
  27  |     const emailInput = this.page.locator('input[type="email"], input[type="text"]').first();
> 28  |     await emailInput.fill(TEST_CREDENTIALS.email);
      |                      ^ TimeoutError: locator.fill: Timeout 15000ms exceeded.
  29  | 
  30  |     // Step 3 — Fill password (second textbox)
  31  |     const passwordInput = this.page.locator('input[type="password"]');
  32  |     await passwordInput.fill(TEST_CREDENTIALS.password);
  33  | 
  34  |     // Step 4 — Click Log In button
  35  |     await this.page.getByRole('button', { name: 'Log In', exact: true }).click();
  36  |     await this.page.waitForURL(PRODUCTS_URL, { timeout: 15000 });
  37  |   }
  38  | 
  39  |   async selectMojoPro() {
  40  |     // Step 5 — Click on MOJO Pro product card
  41  |     // The app goes through a multi-step redirect chain before settling on /overview
  42  |     await this.page.getByRole('heading', { name: 'MOJO Pro' }).click();
  43  |     await this.page.waitForURL(/mojopro\.joveo\.com\/joveo-test\/overview/, { timeout: 30000 });
  44  |     await this.page.waitForLoadState('domcontentloaded');
  45  |   }
  46  | 
  47  |   async fullLogin() {
  48  |     await this.login();
  49  |     await this.selectMojoPro();
  50  |   }
  51  | }
  52  | 
  53  | /**
  54  |  * Page Object: MOJO Pro Dashboard (Overview)
  55  |  */
  56  | export class OverviewPage {
  57  |   readonly url = `${MOJO_PRO_URL}/${ACCOUNT_SLUG}/overview`;
  58  | 
  59  |   constructor(readonly page: Page) {}
  60  | 
  61  |   async goto() {
  62  |     await this.page.goto(this.url);
  63  |     await this.page.waitForLoadState('domcontentloaded');
  64  |   }
  65  | 
  66  |   openToolsMenu() {
  67  |     return this.page.getByRole('button', { name: 'build' });
  68  |   }
  69  | 
  70  |   addClientButton() {
  71  |     return this.page.getByRole('button', { name: 'Add Client' });
  72  |   }
  73  | 
  74  |   filterButton() {
  75  |     return this.page.getByRole('button', { name: 'filter_alt' });
  76  |   }
  77  | 
  78  |   metricsCard(metric: 'Spend' | 'Sp. Clicks' | 'Sp. Applies' | 'CPC' | 'CPA') {
  79  |     return this.page.getByText(metric, { exact: false }).first();
  80  |   }
  81  | 
  82  |   publisherStatisticsHeading() {
  83  |     return this.page.getByRole('heading', { name: 'Publisher statistics' });
  84  |   }
  85  | }
  86  | 
  87  | /**
  88  |  * Extended fixtures
  89  |  */
  90  | type CustomFixtures = {
  91  |   authPage: AuthPage;
  92  |   overviewPage: OverviewPage;
  93  |   mojoproPage: Page;
  94  | };
  95  | 
  96  | export const test = base.extend<CustomFixtures>({
  97  |   authPage: async ({ page }, use) => {
  98  |     await use(new AuthPage(page));
  99  |   },
  100 | 
  101 |   overviewPage: async ({ page }, use) => {
  102 |     await use(new OverviewPage(page));
  103 |   },
  104 | 
  105 |   /**
  106 |    * A fully authenticated page already landed on the MOJO Pro dashboard.
  107 |    * Use this fixture in any test that needs to start after login.
  108 |    */
  109 |   mojoproPage: async ({ page }, use) => {
  110 |     const auth = new AuthPage(page);
  111 |     await auth.fullLogin();
  112 |     await use(page);
  113 |   },
  114 | });
  115 | 
  116 | // 5-second cooldown after every test so results are clearly visible in headed mode
  117 | test.afterEach(async ({ page }) => {
  118 |   await page.waitForTimeout(5000);
  119 | });
  120 | 
```