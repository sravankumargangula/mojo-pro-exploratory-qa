/**
 * Seed test — MOJO Pro Exploratory QA
 *
 * This is the environment bootstrap test that every other generated test
 * references. It validates the three-step entry flow:
 *   1. Navigate to https://accounts.joveo.com/login
 *   2. Login with test credentials
 *   3. Click on MOJO Pro → land on the dashboard
 *
 * All generated tests import from '../fixtures' which reuses this same flow.
 */
import { test, expect, AuthPage, OverviewPage } from '../fixtures';

test.describe('MOJO Pro — Seed (Environment Bootstrap)', () => {
  test('seed', async ({ page }) => {
    const auth = new AuthPage(page);
    const overview = new OverviewPage(page);

    // ── Step 1: Navigate to login page ────────────────────────────────────
    await page.goto('https://accounts.joveo.com/login');
    await expect(page).toHaveURL('https://accounts.joveo.com/login');
    await expect(page.getByRole('heading', { name: 'Log in to Your Account' })).toBeVisible();

    // ── Step 2: Login with credentials ────────────────────────────────────
    const emailInput = page.locator('input[type="email"], input[type="text"]').first();
    await emailInput.fill('joveotest@yopmail.com');
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('JoveoTest@321');
    await page.getByRole('button', { name: 'Log In', exact: true }).click();

    // Verify redirect to product selection page
    await expect(page).toHaveURL('https://accounts.joveo.com/products');
    await expect(page.getByRole('heading', { name: 'MOJO Pro' })).toBeVisible();

    // ── Step 3: Click on MOJO Pro ──────────────────────────────────────────
    await page.getByRole('heading', { name: 'MOJO Pro' }).click();
    await page.waitForURL(/mojopro\.joveo\.com/, { timeout: 15000 });

    // Verify MOJO Pro dashboard loaded
    await expect(page).toHaveURL(/mojopro\.joveo\.com\/joveo-test\/overview/);
    await expect(overview.publisherStatisticsHeading()).toBeVisible();
    await expect(overview.addClientButton()).toBeVisible();
  });
});
