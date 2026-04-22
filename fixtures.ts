import { test as base, expect, Page } from '@playwright/test';

export { expect };

export const LOGIN_URL = 'https://accounts.joveo.com/login';
export const PRODUCTS_URL = 'https://accounts.joveo.com/products';
export const MOJO_PRO_URL = 'https://mojopro.joveo.com';
export const ACCOUNT_SLUG = 'joveo-test';

export const TEST_CREDENTIALS = {
  email: process.env.TEST_EMAIL ?? 'joveotest@yopmail.com',
  password: process.env.TEST_PASSWORD ?? 'JoveoTest@321',
};

/**
 * Page Object: Login & Product Selection
 */
export class AuthPage {
  constructor(readonly page: Page) {}

  async login() {
    // Step 1 — Navigate to login
    await this.page.goto(LOGIN_URL);
    await this.page.waitForLoadState('domcontentloaded');

    // Step 2 — Fill email (first textbox)
    const emailInput = this.page.locator('input[type="email"], input[type="text"]').first();
    await emailInput.fill(TEST_CREDENTIALS.email);

    // Step 3 — Fill password (second textbox)
    const passwordInput = this.page.locator('input[type="password"]');
    await passwordInput.fill(TEST_CREDENTIALS.password);

    // Step 4 — Click Log In button
    await this.page.getByRole('button', { name: 'Log In', exact: true }).click();
    await this.page.waitForURL(PRODUCTS_URL, { timeout: 15000 });
  }

  async selectMojoPro() {
    // Step 5 — Click on MOJO Pro product card
    // The app goes through a multi-step redirect chain before settling on /overview
    await this.page.getByRole('heading', { name: 'MOJO Pro' }).click();
    await this.page.waitForURL(/mojopro\.joveo\.com\/joveo-test\/overview/, { timeout: 30000 });
    await this.page.waitForLoadState('domcontentloaded');
  }

  async fullLogin() {
    await this.login();
    await this.selectMojoPro();
  }
}

/**
 * Page Object: MOJO Pro Dashboard (Overview)
 */
export class OverviewPage {
  readonly url = `${MOJO_PRO_URL}/${ACCOUNT_SLUG}/overview`;

  constructor(readonly page: Page) {}

  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  openToolsMenu() {
    return this.page.getByRole('button', { name: 'build' });
  }

  addClientButton() {
    return this.page.getByRole('button', { name: 'Add Client' });
  }

  filterButton() {
    return this.page.getByRole('button', { name: 'filter_alt' });
  }

  metricsCard(metric: 'Spend' | 'Sp. Clicks' | 'Sp. Applies' | 'CPC' | 'CPA') {
    return this.page.getByText(metric, { exact: false }).first();
  }

  publisherStatisticsHeading() {
    return this.page.getByRole('heading', { name: 'Publisher statistics' });
  }
}

/**
 * Extended fixtures
 */
type CustomFixtures = {
  authPage: AuthPage;
  overviewPage: OverviewPage;
  mojoproPage: Page;
};

export const test = base.extend<CustomFixtures>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },

  overviewPage: async ({ page }, use) => {
    await use(new OverviewPage(page));
  },

  /**
   * A fully authenticated page already landed on the MOJO Pro dashboard.
   * Use this fixture in any test that needs to start after login.
   */
  mojoproPage: async ({ page }, use) => {
    const auth = new AuthPage(page);
    await auth.fullLogin();
    await use(page);
  },
});

// 5-second cooldown after every test so results are clearly visible in headed mode
test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
});
