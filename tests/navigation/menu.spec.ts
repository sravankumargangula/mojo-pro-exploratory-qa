// spec: specs/mojo-pro-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures';

test.describe('Navigation Menu', () => {

  test('3.1 Tools Menu Opens on Click with All Expected Items', async ({ mojoproPage: page }) => {
    // Click the build/tools icon
    const buildBtn = page.getByRole('button', { name: 'build' });
    await expect(buildBtn).toBeVisible();
    await buildBtn.click();
    await page.waitForTimeout(500);

    // Verify all expected menu items appear
    const expectedItems = [
      'Performance Dashboard',
      'Conversion Tracking',
      'Publisher Feeds',
      'Reports',
      'Tag Management',
      'Markups',
      'Publisher Management',
      'Scheduler Tasks',
      'User Management',
    ];
    for (const item of expectedItems) {
      await expect(page.getByRole('menuitem', { name: item })).toBeVisible();
    }

    // Escape closes the menu
    await page.keyboard.press('Escape');
    await expect(page.getByRole('menuitem', { name: 'Reports' })).not.toBeVisible();
  });

  test('3.2 Navigate to Performance Dashboard', async ({ mojoproPage: page }) => {
    await page.getByRole('button', { name: 'build' }).click();
    await page.waitForTimeout(300);

    await page.getByRole('menuitem', { name: 'Performance Dashboard' }).click();
    await page.waitForLoadState('domcontentloaded');

    // URL should reflect the new route
    await expect(page).toHaveURL(/performance|dashboard/i);
  });

  test('3.3 Navigate to Reports', async ({ mojoproPage: page }) => {
    await page.getByRole('button', { name: 'build' }).click();
    await page.waitForTimeout(300);

    await page.getByRole('menuitem', { name: 'Reports' }).click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL(/report/i);
  });

  test('3.4 Navigate to User Management', async ({ mojoproPage: page }) => {
    await page.getByRole('button', { name: 'build' }).click();
    await page.waitForTimeout(300);

    await page.getByRole('menuitem', { name: 'User Management' }).click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL(/user/i);
  });

  test('3.5 Notifications Panel Opens on Click', async ({ mojoproPage: page }) => {
    const notifBtn = page.getByRole('button', { name: 'notifications' });
    await expect(notifBtn).toBeVisible();
    await notifBtn.click();
    await page.waitForTimeout(500);

    // Panel/dropdown opens — button state changes
    await expect(notifBtn).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
  });

});
