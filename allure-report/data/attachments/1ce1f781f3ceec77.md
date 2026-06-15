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
                  - generic [ref=e136]: $230
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
                  - generic [ref=e168]: "72"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_up
                    - generic [ref=e171]: 46.94% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: "8"
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_down
                    - generic [ref=e199]: 27.27% from previous month
                - img [ref=e203]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - img [ref=e219]
                - generic [ref=e220]: CPC
                - img [ref=e221]: arrow_drop_down
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: $3.20
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_down
                    - generic [ref=e227]: 50.54% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $28.78
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_down
                    - generic [ref=e255]: 0.10% from previous month
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
                - generic [ref=e317]: "03"
                - generic [ref=e318]: "05"
                - generic [ref=e319]: "07"
                - generic [ref=e320]: "09"
                - generic [ref=e321]: "11"
                - generic [ref=e322]: "13"
                - generic [ref=e323]: "15"
              - generic [ref=e324]:
                - generic [ref=e325]: $0
                - generic [ref=e326]: $60
                - generic [ref=e327]: $120
                - generic [ref=e328]: $180
              - generic [ref=e329]:
                - generic [ref=e330]: $0
                - generic [ref=e331]: $20
                - generic [ref=e332]: $40
                - generic [ref=e333]: $60
          - generic [ref=e335]:
            - generic [ref=e336]:
              - generic [ref=e337]:
                - generic [ref=e338]: Hiring funnel
                - img [ref=e339] [cursor=pointer]: settings
              - generic [ref=e343]:
                - generic [ref=e344]:
                  - generic [ref=e345]:
                    - generic [ref=e346]: Clicks
                    - generic [ref=e347]: "72"
                  - generic [ref=e348]:
                    - generic [ref=e349]: Apply Starts
                    - generic [ref=e350]: "17"
                    - generic [ref=e351]: 76.39% Drop
                  - generic [ref=e352]:
                    - generic [ref=e353]: Apply Finish
                    - generic [ref=e354]: "8"
                    - generic [ref=e355]: 52.94% Drop
                  - generic [ref=e356]:
                    - generic [ref=e357]: Hires
                    - generic [ref=e358]: "0"
                    - generic [ref=e359]: 100% Drop
                - img [ref=e363]
            - generic [ref=e386]:
              - generic [ref=e387]: Spend analysis
              - generic [ref=e390]:
                - generic [ref=e391]:
                  - generic [ref=e392]:
                    - img "Spend" [ref=e393]
                    - generic [ref=e394]: Spend
                  - generic [ref=e395]:
                    - img "Proj. spend" [ref=e396]
                    - generic [ref=e397]: Proj. spend
                  - generic [ref=e398]:
                    - img "Prev. month spend" [ref=e399]
                    - generic [ref=e400]: Prev. month spend
                - img [ref=e404]:
                  - generic [ref=e423]:
                    - generic [ref=e424]: "02"
                    - generic [ref=e425]: "04"
                    - generic [ref=e426]: "06"
                    - generic [ref=e427]: "08"
                    - generic [ref=e428]: "10"
                    - generic [ref=e429]: "12"
                    - generic [ref=e430]: "14"
                    - generic [ref=e431]: "16"
                    - generic [ref=e432]: "18"
                    - generic [ref=e433]: "20"
                    - generic [ref=e434]: "22"
                    - generic [ref=e435]: "24"
                    - generic [ref=e436]: "26"
                    - generic [ref=e437]: "28"
                    - generic [ref=e438]: "30"
                  - generic [ref=e439]:
                    - generic [ref=e440]: $0
                    - generic [ref=e441]: $250
                    - generic [ref=e442]: $500
                    - generic [ref=e443]: $750
                    - generic [ref=e444]: $1K
          - generic [ref=e446]:
            - heading "Publisher statistics" [level=2] [ref=e447]
            - generic [ref=e448]:
              - generic [ref=e449]:
                - generic [ref=e450]: Publishers comparison on
                - button "Spend" [ref=e452] [cursor=pointer]:
                  - img [ref=e453]: arrow_drop_down
                  - generic [ref=e454]: Spend
              - generic [ref=e457]:
                - generic [ref=e464]:
                  - img "Spend $230.27" [ref=e465]
                  - generic [ref=e477]:
                    - generic [ref=e478]: Spend
                    - generic [ref=e479]: $230.27
                - img [ref=e486]:
                  - generic [ref=e498]:
                    - generic [ref=e500]:
                      - generic [ref=e501]: $114.50
                      - text: $114.50
                    - generic [ref=e503]:
                      - generic [ref=e504]: $98.57
                      - text: $98.57
                    - generic [ref=e506]:
                      - generic [ref=e507]: $14.78
                      - text: $14.78
                    - generic [ref=e509]:
                      - generic [ref=e510]: $2.30
                      - text: $2.30
                    - generic [ref=e512]:
                      - generic [ref=e513]: $0.12
                      - text: $0.12
                  - generic [ref=e514]:
                    - generic [ref=e515]: S-BC-CPC
                    - generic [ref=e516]: Sanity test pub
                    - generic [ref=e517]: JAX USD
                    - generic [ref=e518]: Joveo Pixel Test Feed
                    - generic [ref=e519]: S-BC-SLOTS
                  - generic [ref=e520]:
                    - generic [ref=e521]: $0
                    - generic [ref=e522]: $100
                    - generic [ref=e523]: $25
                    - generic [ref=e524]: $50
                    - generic [ref=e525]: $75
                    - generic [ref=e526]: $125
                    - generic [ref=e527]: $150
              - generic [ref=e529] [cursor=pointer]:
                - generic [ref=e530]: View Publishers
                - img [ref=e531]: arrow_forward
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