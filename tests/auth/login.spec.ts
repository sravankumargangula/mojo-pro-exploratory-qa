// spec: specs/mojo-pro-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures';

test.describe('Authentication & Login', () => {

  test('1.1 Successful Login with Valid Credentials', async ({ page }) => {
    // Step 1: Navigate to login page
    await page.goto('https://accounts.joveo.com/login');
    await expect(page).toHaveURL('https://accounts.joveo.com/login');

    // Step 2: Verify login page heading
    await expect(page.getByRole('heading', { name: 'Log in to Your Account' })).toBeVisible();

    // Step 3: Fill email
    await page.locator('input[type="email"], input[type="text"]').first().fill('joveotest@yopmail.com');

    // Step 4: Fill password
    await page.locator('input[type="password"]').fill('JoveoTest@321');

    // Step 5: Click Log In
    await page.getByRole('button', { name: 'Log In', exact: true }).click();

    // Verify product selection page
    await expect(page).toHaveURL('https://accounts.joveo.com/products');
    await expect(page.getByRole('heading', { name: /Welcome Back/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'MOJO Pro' })).toBeVisible();
  });

  test('1.2 Login with Invalid Credentials', async ({ page }) => {
    // Step 1: Navigate to login page
    await page.goto('https://accounts.joveo.com/login');

    // Step 2: Enter invalid email
    await page.locator('input[type="email"], input[type="text"]').first().fill('invalid@test.com');

    // Step 3: Enter wrong password
    await page.locator('input[type="password"]').fill('WrongPassword123');

    // Step 4: Click Log In
    await page.getByRole('button', { name: 'Log In', exact: true }).click();
    await page.waitForTimeout(2000);

    // User should remain on login page — no redirect to /products
    await expect(page).not.toHaveURL(/products/);
  });

  test('1.3 Login with Empty Fields', async ({ page }) => {
    // Step 1: Navigate to login page
    await page.goto('https://accounts.joveo.com/login');

    // Step 2: Leave fields empty and submit
    await page.getByRole('button', { name: 'Log In', exact: true }).click();
    await page.waitForTimeout(1000);

    // User stays on login page
    await expect(page).toHaveURL('https://accounts.joveo.com/login');
  });

  test('1.4 Product Selection — Click MOJO Pro', async ({ authPage, page }) => {
    // Steps 1-2: Full login flow
    await authPage.login();

    // Verify products page
    await expect(page).toHaveURL('https://accounts.joveo.com/products');
    const mojoCard = page.getByRole('heading', { name: 'MOJO Pro' });
    await expect(mojoCard).toBeVisible();

    // Verify card has the correct sub-text
    await expect(page.getByText('mojopro.joveo.com')).toBeVisible();

    // Step 3: Click MOJO Pro — the app goes through a multi-step redirect chain
    // (mojopro.joveo.com → /validate → /overview) so we wait for the final URL
    await mojoCard.click();
    await page.waitForURL(/mojopro\.joveo\.com\/joveo-test\/overview/, { timeout: 30000 });

    // Verify MOJO Pro dashboard
    await expect(page).toHaveURL(/mojopro\.joveo\.com\/joveo-test\/overview/, { timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Publisher statistics' })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole('button', { name: 'Add Client' })).toBeVisible({ timeout: 10000 });
  });

});
