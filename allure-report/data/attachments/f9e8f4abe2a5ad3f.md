# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: overview/dashboard.spec.ts >> Overview Dashboard >> 2.2 Add Filter Interaction
- Location: tests/overview/dashboard.spec.ts:26:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'filter_alt' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'filter_alt' })

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
                  - generic [ref=e136]: $1
                  - generic [ref=e137]:
                    - img [ref=e138]: arrow_drop_down
                    - generic [ref=e139]: Underpacing by 0%
                - img [ref=e143]
            - generic [ref=e156]:
              - generic [ref=e158] [cursor=pointer]:
                - img [ref=e159]
                - generic [ref=e160]: Sp. Clicks
                - img [ref=e161]: arrow_drop_down
              - generic [ref=e162]:
                - generic [ref=e163]:
                  - generic [ref=e164]: "2"
                  - generic [ref=e165]:
                    - img [ref=e166]: arrow_drop_up
                    - generic [ref=e167]: 100% from previous month
                - img [ref=e171]
            - generic [ref=e178]:
              - generic [ref=e180] [cursor=pointer]:
                - img [ref=e181]
                - generic [ref=e182]: Sp. Applies
                - img [ref=e183]: arrow_drop_down
              - generic [ref=e184]:
                - generic [ref=e185]:
                  - generic [ref=e186]: "0"
                  - generic [ref=e187]: NA
                - img [ref=e191]
            - generic [ref=e198]:
              - generic [ref=e200] [cursor=pointer]:
                - img [ref=e201]
                - generic [ref=e202]: CPC
                - img [ref=e203]: arrow_drop_down
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - generic [ref=e206]: $0.58
                  - generic [ref=e207]: NA
                - img [ref=e211]
            - generic [ref=e218]:
              - generic [ref=e220] [cursor=pointer]:
                - img [ref=e221]
                - generic [ref=e222]: CPA
                - img [ref=e223]: arrow_drop_down
              - generic [ref=e224]:
                - generic [ref=e225]:
                  - generic [ref=e226]: $0
                  - generic [ref=e227]: NA
                - img [ref=e231]
          - generic [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e239]: Compare performance of
              - button "Spend vs CPA" [ref=e241] [cursor=pointer]:
                - img [ref=e242]: arrow_drop_down
                - generic [ref=e244]:
                  - generic [ref=e247]: Spend
                  - generic [ref=e248]: vs
                  - generic [ref=e251]: CPA
            - img [ref=e260]:
              - generic [ref=e268]: Spend
              - generic [ref=e270]: CPA
              - generic [ref=e277]: "01"
              - generic [ref=e278]:
                - generic [ref=e279]: $0
                - generic [ref=e280]: $0.50
                - generic [ref=e281]: $1
                - generic [ref=e282]: $1.50
              - generic [ref=e283]:
                - generic [ref=e284]: $0
                - generic [ref=e285]: $1
                - generic [ref=e286]: $2
                - generic [ref=e287]: $3
          - generic [ref=e289]:
            - generic [ref=e290]:
              - generic [ref=e291]:
                - generic [ref=e292]: Hiring funnel
                - img [ref=e293] [cursor=pointer]: settings
              - generic [ref=e297]:
                - generic [ref=e298]:
                  - generic [ref=e299]:
                    - generic [ref=e300]: Clicks
                    - generic [ref=e301]: "2"
                  - generic [ref=e302]:
                    - generic [ref=e303]: Apply Starts
                    - generic [ref=e304]: "1"
                    - generic [ref=e305]: 50% Drop
                  - generic [ref=e306]:
                    - generic [ref=e307]: Apply Finish
                    - generic [ref=e308]: "0"
                    - generic [ref=e309]: 100% Drop
                  - generic [ref=e310]:
                    - generic [ref=e311]: Hires
                    - generic [ref=e312]: "0"
                    - generic [ref=e313]: No Drop
                - img [ref=e317]
            - generic [ref=e340]:
              - generic [ref=e341]: Spend analysis
              - generic [ref=e344]:
                - generic [ref=e345]:
                  - generic [ref=e346]:
                    - img "Spend" [ref=e347]
                    - generic [ref=e348]: Spend
                  - generic [ref=e349]:
                    - img "Proj. spend" [ref=e350]
                    - generic [ref=e351]: Proj. spend
                  - generic [ref=e352]:
                    - img "Prev. month spend" [ref=e353]
                    - generic [ref=e354]: Prev. month spend
                - img [ref=e358]:
                  - generic [ref=e373]:
                    - generic [ref=e374]: "02"
                    - generic [ref=e375]: "04"
                    - generic [ref=e376]: "06"
                    - generic [ref=e377]: "08"
                    - generic [ref=e378]: "10"
                    - generic [ref=e379]: "12"
                    - generic [ref=e380]: "14"
                    - generic [ref=e381]: "16"
                    - generic [ref=e382]: "18"
                    - generic [ref=e383]: "20"
                    - generic [ref=e384]: "22"
                    - generic [ref=e385]: "24"
                    - generic [ref=e386]: "26"
                    - generic [ref=e387]: "28"
                    - generic [ref=e388]: "30"
                  - generic [ref=e389]:
                    - generic [ref=e390]: $0
                    - generic [ref=e391]: $250
                    - generic [ref=e392]: $500
                    - generic [ref=e393]: $750
                    - generic [ref=e394]: $1K
          - generic [ref=e396]:
            - heading "Publisher statistics" [level=2] [ref=e397]
            - generic [ref=e398]:
              - generic [ref=e399]:
                - generic [ref=e400]: Publishers comparison on
                - button "Spend" [ref=e402] [cursor=pointer]:
                  - img [ref=e403]: arrow_drop_down
                  - generic [ref=e404]: Spend
              - generic [ref=e407]:
                - generic [ref=e414]:
                  - img "Spend $1.15" [ref=e415]
                  - generic [ref=e423]:
                    - generic [ref=e424]: Spend
                    - generic [ref=e425]: $1.15
                - img [ref=e432]:
                  - generic [ref=e443]:
                    - generic [ref=e444]: $1.15
                    - text: $1.15
                  - generic [ref=e446]: Joveo Pixel Test Feed
                  - generic [ref=e447]:
                    - generic [ref=e448]: $0
                    - generic [ref=e449]: $1
                    - generic [ref=e450]: $0.25
                    - generic [ref=e451]: $0.50
                    - generic [ref=e452]: $0.75
                    - generic [ref=e453]: $1.25
                    - generic [ref=e454]: $1.50
              - generic [ref=e456] [cursor=pointer]:
                - generic [ref=e457]: View Publishers
                - img [ref=e458]: arrow_forward
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
  13 |     await expect(page.getByRole('heading', { name: 'Overview', exact: true })).toBeVisible();
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
> 29 |     await expect(filterBtn).toBeVisible();
     |                             ^ Error: expect(locator).toBeVisible() failed
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