# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: overview/dashboard.spec.ts >> Overview Dashboard >> 2.1 Dashboard Metrics Visibility
- Location: tests/overview/dashboard.spec.ts:8:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Overview', exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Overview', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img [ref=e6] [cursor=pointer]
    - generic [ref=e8]:
      - generic [ref=e9] [cursor=pointer]:
        - generic [ref=e10]: Account
        - generic [ref=e12]: Joveo-Test - $ USD
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]: All Clients
        - img [ref=e16]: arrow_drop_down
    - generic [ref=e17]:
      - generic [ref=e21] [cursor=pointer]:
        - img [ref=e22]:
          - img [ref=e23]
        - text: All Regions
        - generic [ref=e25]: USD (P)
        - img [ref=e26]: arrow_drop_down
      - button [ref=e28] [cursor=pointer]:
        - img [ref=e29]: build
      - button [ref=e34] [cursor=pointer]:
        - img [ref=e35]: notifications
      - generic [ref=e39] [cursor=pointer]: JT
  - generic [ref=e40]:
    - generic [ref=e45]:
      - img [ref=e49] [cursor=pointer]:
        - img [ref=e50]
      - img [ref=e59] [cursor=pointer]:
        - img [ref=e60]
      - img [ref=e65] [cursor=pointer]:
        - img [ref=e66]
    - generic [ref=e77]:
      - generic [ref=e79]:
        - generic [ref=e80]:
          - generic [ref=e81]: Overview
          - generic [ref=e82]:
            - generic [ref=e83]:
              - generic [ref=e84]: Account
              - img [ref=e85]: keyboard_arrow_right
            - generic [ref=e87]: Joveo-Test - $ USD
        - button "Add Client" [ref=e89]:
          - img [ref=e90]: add
          - generic [ref=e91]: Add Client
      - generic [ref=e94]:
        - generic [ref=e95]:
          - generic [ref=e97]:
            - button:
              - img: filter_alt
            - generic [ref=e100] [cursor=pointer]: Add Filter
          - generic [ref=e101]:
            - button "Overall" [ref=e103] [cursor=pointer]:
              - generic [ref=e105]:
                - img [ref=e106]: bar_chart
                - generic [ref=e107]: Overall
              - img [ref=e108]: arrow_drop_down
            - button "This Month" [ref=e113] [cursor=pointer]:
              - generic [ref=e115]:
                - img [ref=e116]: date_range
                - generic [ref=e117]: This Month
              - img [ref=e118]: arrow_drop_down
        - generic [ref=e123]:
          - generic [ref=e125]:
            - generic [ref=e128]:
              - generic [ref=e130] [cursor=pointer]:
                - img [ref=e131]
                - generic [ref=e132]: Spend
                - img [ref=e133]: arrow_drop_down
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - generic [ref=e136]: $30
                  - generic [ref=e137]:
                    - img [ref=e138]: arrow_drop_down
                    - generic [ref=e139]: Underpacing by 0.00%
                - img [ref=e143]
            - generic [ref=e160]:
              - generic [ref=e162] [cursor=pointer]:
                - img [ref=e163]
                - generic [ref=e164]: Sp. Clicks
                - img [ref=e165]: arrow_drop_down
              - generic [ref=e166]:
                - generic [ref=e167]:
                  - generic [ref=e168]: "20"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.91% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: "4"
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_down
                    - generic [ref=e199]: 99.76% from previous month
                - img [ref=e203]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - img [ref=e219]
                - generic [ref=e220]: CPC
                - img [ref=e221]: arrow_drop_down
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: $1.53
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_up
                    - generic [ref=e227]: 313.51% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $7.67
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_up
                    - generic [ref=e255]: 55.58% from previous month
                - img [ref=e259]
          - generic [ref=e271]:
            - generic [ref=e272]:
              - generic [ref=e273]: Compare performance of
              - button "Spend vs CPA" [ref=e275] [cursor=pointer]:
                - img [ref=e276]: arrow_drop_down
                - generic [ref=e278]:
                  - generic [ref=e281]: Spend
                  - generic [ref=e282]: vs
                  - generic [ref=e285]: CPA
            - img [ref=e294]:
              - generic [ref=e303]: Spend
              - generic [ref=e305]: CPA
              - generic [ref=e315]:
                - generic [ref=e316]: "01"
                - generic [ref=e317]: "02"
                - generic [ref=e318]: "03"
                - generic [ref=e319]: "04"
                - generic [ref=e320]: "05"
                - generic [ref=e321]: "06"
                - generic [ref=e322]: "07"
              - generic [ref=e323]:
                - generic [ref=e324]: $0
                - generic [ref=e325]: $6
                - generic [ref=e326]: $12
                - generic [ref=e327]: $18
              - generic [ref=e328]:
                - generic [ref=e329]: $0
                - generic [ref=e330]: $4
                - generic [ref=e331]: $8
                - generic [ref=e332]: $12
          - generic [ref=e334]:
            - generic [ref=e335]:
              - generic [ref=e336]:
                - generic [ref=e337]: Hiring funnel
                - img [ref=e338] [cursor=pointer]: settings
              - generic [ref=e342]:
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - generic [ref=e345]: Clicks
                    - generic [ref=e346]: "20"
                  - generic [ref=e347]:
                    - generic [ref=e348]: Apply Starts
                    - generic [ref=e349]: "0"
                    - generic [ref=e350]: 100% Drop
                  - generic [ref=e351]:
                    - generic [ref=e352]: Apply Finish
                    - generic [ref=e353]: "4"
                    - generic [ref=e354]: No Drop
                  - generic [ref=e355]:
                    - generic [ref=e356]: Hires
                    - generic [ref=e357]: "0"
                    - generic [ref=e358]: 100% Drop
                - img [ref=e362]
            - generic [ref=e385]:
              - generic [ref=e386]: Spend analysis
              - generic [ref=e389]:
                - generic [ref=e390]:
                  - generic [ref=e391]:
                    - img "Spend" [ref=e392]
                    - generic [ref=e393]: Spend
                  - generic [ref=e394]:
                    - img "Proj. spend" [ref=e395]
                    - generic [ref=e396]: Proj. spend
                  - generic [ref=e397]:
                    - img "Prev. month spend" [ref=e398]
                    - generic [ref=e399]: Prev. month spend
                - img [ref=e403]:
                  - generic [ref=e422]:
                    - generic [ref=e423]: "01"
                    - generic [ref=e424]: "03"
                    - generic [ref=e425]: "05"
                    - generic [ref=e426]: "07"
                    - generic [ref=e427]: "09"
                    - generic [ref=e428]: "11"
                    - generic [ref=e429]: "13"
                    - generic [ref=e430]: "15"
                    - generic [ref=e431]: "17"
                    - generic [ref=e432]: "19"
                    - generic [ref=e433]: "21"
                    - generic [ref=e434]: "23"
                    - generic [ref=e435]: "25"
                    - generic [ref=e436]: "27"
                    - generic [ref=e437]: "29"
                    - generic [ref=e438]: "31"
                  - generic [ref=e439]:
                    - generic [ref=e440]: $0
                    - generic [ref=e441]: $5K
                    - generic [ref=e442]: $10K
                    - generic [ref=e443]: $15K
          - generic [ref=e445]:
            - heading "Publisher statistics" [level=2] [ref=e446]
            - generic [ref=e447]:
              - generic [ref=e448]:
                - generic [ref=e449]: Publishers comparison on
                - button "Spend" [ref=e451] [cursor=pointer]:
                  - img [ref=e452]: arrow_drop_down
                  - generic [ref=e453]: Spend
              - generic [ref=e456]:
                - generic [ref=e463]:
                  - img "Spend $30.69" [ref=e464]
                  - generic [ref=e473]:
                    - generic [ref=e474]: Spend
                    - generic [ref=e475]: $30.69
                - img [ref=e482]:
                  - generic [ref=e492]:
                    - generic [ref=e494]:
                      - generic [ref=e495]: $30.54
                      - text: $30.54
                    - generic [ref=e497]:
                      - generic [ref=e498]: $0.15
                      - text: $0.15
                  - generic [ref=e499]:
                    - generic [ref=e500]: Joveo Pixel Test Feed
                    - generic [ref=e501]: S-BC-SLOTS
                  - generic [ref=e502]:
                    - generic [ref=e503]: $0
                    - generic [ref=e504]: $5
                    - generic [ref=e505]: $10
                    - generic [ref=e506]: $15
                    - generic [ref=e507]: $20
                    - generic [ref=e508]: $25
                    - generic [ref=e509]: $30
                    - generic [ref=e510]: $35
                    - generic [ref=e511]: $40
              - generic [ref=e513] [cursor=pointer]:
                - generic [ref=e514]: View Publishers
                - img [ref=e515]: arrow_forward
```

# Test source

```ts
  1  | // spec: specs/mojo-pro-test-plan.md
  2  | // seed: tests/seed.spec.ts
  3  | 
  4  | import { test, expect } from '../../fixtures';
  5  | 
  6  | test.describe('Overview Dashboard', () => {
  7  | 
  8  |   test('2.1 Dashboard Metrics Visibility', async ({ mojoproPage: page }) => {
  9  |     // Verify URL
  10 |     await expect(page).toHaveURL(/joveo-test\/overview/);
  11 | 
  12 |     // Verify page heading
> 13 |     await expect(page.getByRole('heading', { name: 'Overview', exact: true })).toBeVisible();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  14 | 
  15 |     // Verify key metric labels are present on the page
  16 |     await expect(page.getByText('Spend', { exact: false }).first()).toBeVisible();
  17 |     await expect(page.getByText('Sp. Clicks', { exact: false })).toBeVisible();
  18 |     await expect(page.getByText('Sp. Applies', { exact: false })).toBeVisible();
  19 |     await expect(page.getByText('CPC', { exact: false }).first()).toBeVisible();
  20 |     await expect(page.getByText('CPA', { exact: false }).first()).toBeVisible();
  21 | 
  22 |     // Verify Publisher statistics section
  23 |     await expect(page.getByRole('heading', { name: 'Publisher statistics' })).toBeVisible();
  24 |   });
  25 | 
  26 |   test('2.2 Add Filter Interaction', async ({ mojoproPage: page }) => {
  27 |     // Click Add Filter button
  28 |     const filterBtn = page.getByRole('button', { name: 'filter_alt' });
  29 |     await expect(filterBtn).toBeVisible();
  30 |     await filterBtn.click();
  31 |     await page.waitForTimeout(500);
  32 | 
  33 |     // Snapshot — verify filter UI appeared (panel or dropdown)
  34 |     const snapshot = await page.content();
  35 |     expect(snapshot.length).toBeGreaterThan(0);
  36 |   });
  37 | 
  38 |   test('2.3 Metric View Toggle — Overall dropdown', async ({ mojoproPage: page }) => {
  39 |     // Click "Overall" dropdown
  40 |     const overallBtn = page.getByRole('button', { name: 'Overall' });
  41 |     await expect(overallBtn).toBeVisible();
  42 |     await overallBtn.click();
  43 |     await page.waitForTimeout(500);
  44 | 
  45 |     // Verify dropdown opens (button state changes to expanded)
  46 |     await expect(overallBtn).toHaveAttribute('aria-expanded', 'true');
  47 |     await page.keyboard.press('Escape');
  48 |   });
  49 | 
  50 |   test('2.4 Date Range Toggle — This Month dropdown', async ({ mojoproPage: page }) => {
  51 |     // Click "This Month" button
  52 |     const dateBtn = page.getByRole('button', { name: 'This Month' });
  53 |     await expect(dateBtn).toBeVisible();
  54 |     await dateBtn.click();
  55 |     await page.waitForTimeout(500);
  56 | 
  57 |     // Dropdown should open
  58 |     await expect(dateBtn).toHaveAttribute('aria-expanded', 'true');
  59 |     await page.keyboard.press('Escape');
  60 |   });
  61 | 
  62 |   test('2.5 Performance Chart — Spend vs CPA metric dropdown', async ({ mojoproPage: page }) => {
  63 |     // Verify chart section label
  64 |     await expect(page.getByText('Compare performance of')).toBeVisible();
  65 | 
  66 |     // Click the Spend vs CPA dropdown button
  67 |     const chartDropdown = page.getByRole('button', { name: 'Spend vs CPA' });
  68 |     await expect(chartDropdown).toBeVisible();
  69 |     await chartDropdown.click();
  70 |     await page.waitForTimeout(500);
  71 | 
  72 |     await expect(chartDropdown).toHaveAttribute('aria-expanded', 'true');
  73 |     await page.keyboard.press('Escape');
  74 |   });
  75 | 
  76 |   test('2.6 Add Client Button is Visible and Clickable', async ({ mojoproPage: page }) => {
  77 |     // Verify button is present
  78 |     const addClientBtn = page.getByRole('button', { name: 'Add Client' });
  79 |     await expect(addClientBtn).toBeVisible();
  80 | 
  81 |     // Click it
  82 |     await addClientBtn.click();
  83 |     await page.waitForTimeout(1000);
  84 | 
  85 |     // A modal or navigation should result — verify page changed or dialog appeared
  86 |     const url = page.url();
  87 |     const hasModal = await page.locator('[role="dialog"]').count();
  88 |     const hasNewRoute = url.includes('client') || url.includes('add');
  89 |     expect(hasModal > 0 || hasNewRoute).toBeTruthy();
  90 |   });
  91 | 
  92 | });
  93 | 
```