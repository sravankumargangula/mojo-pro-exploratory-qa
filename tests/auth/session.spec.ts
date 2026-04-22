// spec: specs/mojo-pro-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures';

test.describe('Session & Security', () => {

  test('5.1 Direct URL Access Without Login Redirects to Auth', async ({ page }) => {
    // Use a fresh page with no session — navigate directly to MOJO Pro
    await page.goto('https://mojopro.joveo.com/joveo-test/overview');
    await page.waitForLoadState('domcontentloaded');

    // Should be redirected to login/auth — not on the dashboard
    await expect(page).not.toHaveURL(/joveo-test\/overview/);
  });

  test('5.2 Logout Flow Returns to Login Page', async ({ authPage, page }) => {
    // Login and select MOJO Pro
    await authPage.fullLogin();
    await expect(page).toHaveURL(/mojopro\.joveo\.com/);

    // Navigate back to Joveo Accounts product page
    await page.goto('https://accounts.joveo.com/products');
    await expect(page.getByRole('heading', { name: 'MOJO Pro' })).toBeVisible();

    // Click Log out
    await page.getByRole('heading', { name: 'Log out' }).click();
    await page.waitForLoadState('domcontentloaded');

    // Should be on login page
    await expect(page).toHaveURL(/accounts\.joveo\.com\/login/);
    await expect(page.getByRole('heading', { name: 'Log in to Your Account' })).toBeVisible();
  });

});
