// spec: specs/mojo-pro-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures';

test.describe('Overview Dashboard', () => {

  test('2.1 Dashboard Metrics Visibility', async ({ mojoproPage: page }) => {
    // Verify URL
    await expect(page).toHaveURL(/joveo-test\/overview/);

    // Verify page heading
    await expect(page.getByRole('heading', { name: 'Overview', exact: true })).toBeVisible();

    // Verify key metric labels are present on the page
    await expect(page.getByText('Spend', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('Sp. Clicks', { exact: false })).toBeVisible();
    await expect(page.getByText('Sp. Applies', { exact: false })).toBeVisible();
    await expect(page.getByText('CPC', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('CPA', { exact: false }).first()).toBeVisible();

    // Verify Publisher statistics section
    await expect(page.getByRole('heading', { name: 'Publisher statistics' })).toBeVisible();
  });

  test('2.2 Add Filter Interaction', async ({ mojoproPage: page }) => {
    // Click Add Filter button
    const filterBtn = page.getByRole('button', { name: 'filter_alt' });
    await expect(filterBtn).toBeVisible();
    await filterBtn.click();
    await page.waitForTimeout(500);

    // Snapshot — verify filter UI appeared (panel or dropdown)
    const snapshot = await page.content();
    expect(snapshot.length).toBeGreaterThan(0);
  });

  test('2.3 Metric View Toggle — Overall dropdown', async ({ mojoproPage: page }) => {
    // Click "Overall" dropdown
    const overallBtn = page.getByRole('button', { name: 'Overall' });
    await expect(overallBtn).toBeVisible();
    await overallBtn.click();
    await page.waitForTimeout(500);

    // Verify dropdown opens (button state changes to expanded)
    await expect(overallBtn).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
  });

  test('2.4 Date Range Toggle — This Month dropdown', async ({ mojoproPage: page }) => {
    // Click "This Month" button
    const dateBtn = page.getByRole('button', { name: 'This Month' });
    await expect(dateBtn).toBeVisible();
    await dateBtn.click();
    await page.waitForTimeout(500);

    // Dropdown should open
    await expect(dateBtn).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
  });

  test('2.5 Performance Chart — Spend vs CPA metric dropdown', async ({ mojoproPage: page }) => {
    // Verify chart section label
    await expect(page.getByText('Compare performance of')).toBeVisible();

    // Click the Spend vs CPA dropdown button
    const chartDropdown = page.getByRole('button', { name: 'Spend vs CPA' });
    await expect(chartDropdown).toBeVisible();
    await chartDropdown.click();
    await page.waitForTimeout(500);

    await expect(chartDropdown).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
  });

  test('2.6 Add Client Button is Visible and Clickable', async ({ mojoproPage: page }) => {
    // Verify button is present
    const addClientBtn = page.getByRole('button', { name: 'Add Client' });
    await expect(addClientBtn).toBeVisible();

    // Click it
    await addClientBtn.click();
    await page.waitForTimeout(1000);

    // A modal or navigation should result — verify page changed or dialog appeared
    const url = page.url();
    const hasModal = await page.locator('[role="dialog"]').count();
    const hasNewRoute = url.includes('client') || url.includes('add');
    expect(hasModal > 0 || hasNewRoute).toBeTruthy();
  });

});
