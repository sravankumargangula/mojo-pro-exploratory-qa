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
                  - generic [ref=e136]: $106
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
                  - generic [ref=e168]: "41"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.82% from previous month
                - img [ref=e175]
            - generic [ref=e187]:
              - generic [ref=e189] [cursor=pointer]:
                - img [ref=e190]
                - generic [ref=e191]: Sp. Applies
                - img [ref=e192]: arrow_drop_down
              - generic [ref=e193]:
                - generic [ref=e194]:
                  - generic [ref=e195]: "5"
                  - generic [ref=e196]:
                    - img [ref=e197]: arrow_drop_down
                    - generic [ref=e198]: 99.70% from previous month
                - img [ref=e202]
            - generic [ref=e214]:
              - generic [ref=e216] [cursor=pointer]:
                - img [ref=e217]
                - generic [ref=e218]: CPC
                - img [ref=e219]: arrow_drop_down
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - generic [ref=e222]: $2.60
                  - generic [ref=e223]:
                    - img [ref=e224]: arrow_drop_up
                    - generic [ref=e225]: 550% from previous month
                - img [ref=e229]
            - generic [ref=e241]:
              - generic [ref=e243] [cursor=pointer]:
                - img [ref=e244]
                - generic [ref=e245]: CPA
                - img [ref=e246]: arrow_drop_down
              - generic [ref=e247]:
                - generic [ref=e248]:
                  - generic [ref=e249]: $21.30
                  - generic [ref=e250]:
                    - img [ref=e251]: arrow_drop_up
                    - generic [ref=e252]: 297.39% from previous month
                - img [ref=e256]
          - generic [ref=e268]:
            - generic [ref=e269]:
              - generic [ref=e270]: Compare performance of
              - button "Spend vs CPA" [ref=e272] [cursor=pointer]:
                - img [ref=e273]: arrow_drop_down
                - generic [ref=e275]:
                  - generic [ref=e278]: Spend
                  - generic [ref=e279]: vs
                  - generic [ref=e282]: CPA
            - img [ref=e291]:
              - generic [ref=e300]: Spend
              - generic [ref=e302]: CPA
              - generic [ref=e318]:
                - generic [ref=e319]: "01"
                - generic [ref=e320]: "03"
                - generic [ref=e321]: "05"
                - generic [ref=e322]: "07"
                - generic [ref=e323]: "09"
                - generic [ref=e324]: "11"
                - generic [ref=e325]: "13"
                - generic [ref=e326]: "15"
                - generic [ref=e327]: "17"
              - generic [ref=e328]:
                - generic [ref=e329]: $0
                - generic [ref=e330]: $15
                - generic [ref=e331]: $30
                - generic [ref=e332]: $45
              - generic [ref=e333]:
                - generic [ref=e334]: $0
                - generic [ref=e335]: $4
                - generic [ref=e336]: $8
                - generic [ref=e337]: $12
          - generic [ref=e339]:
            - generic [ref=e340]:
              - generic [ref=e341]:
                - generic [ref=e342]: Hiring funnel
                - img [ref=e343] [cursor=pointer]: settings
              - generic [ref=e347]:
                - generic [ref=e348]:
                  - generic [ref=e349]:
                    - generic [ref=e350]: Clicks
                    - generic [ref=e351]: "41"
                  - generic [ref=e352]:
                    - generic [ref=e353]: Apply Starts
                    - generic [ref=e354]: "15"
                    - generic [ref=e355]: 63.41% Drop
                  - generic [ref=e356]:
                    - generic [ref=e357]: Apply Finish
                    - generic [ref=e358]: "5"
                    - generic [ref=e359]: 66.67% Drop
                  - generic [ref=e360]:
                    - generic [ref=e361]: Hires
                    - generic [ref=e362]: "0"
                    - generic [ref=e363]: 100% Drop
                - img [ref=e367]
            - generic [ref=e390]:
              - generic [ref=e391]: Spend analysis
              - generic [ref=e394]:
                - generic [ref=e395]:
                  - generic [ref=e396]:
                    - img "Spend" [ref=e397]
                    - generic [ref=e398]: Spend
                  - generic [ref=e399]:
                    - img "Proj. spend" [ref=e400]
                    - generic [ref=e401]: Proj. spend
                  - generic [ref=e402]:
                    - img "Prev. month spend" [ref=e403]
                    - generic [ref=e404]: Prev. month spend
                - img [ref=e408]:
                  - generic [ref=e427]:
                    - generic [ref=e428]: "01"
                    - generic [ref=e429]: "03"
                    - generic [ref=e430]: "05"
                    - generic [ref=e431]: "07"
                    - generic [ref=e432]: "09"
                    - generic [ref=e433]: "11"
                    - generic [ref=e434]: "13"
                    - generic [ref=e435]: "15"
                    - generic [ref=e436]: "17"
                    - generic [ref=e437]: "19"
                    - generic [ref=e438]: "21"
                    - generic [ref=e439]: "23"
                    - generic [ref=e440]: "25"
                    - generic [ref=e441]: "27"
                    - generic [ref=e442]: "29"
                    - generic [ref=e443]: "31"
                  - generic [ref=e444]:
                    - generic [ref=e445]: $0
                    - generic [ref=e446]: $5K
                    - generic [ref=e447]: $10K
                    - generic [ref=e448]: $15K
          - generic [ref=e450]:
            - heading "Publisher statistics" [level=2] [ref=e451]
            - generic [ref=e452]:
              - generic [ref=e453]:
                - generic [ref=e454]: Publishers comparison on
                - button "Spend" [ref=e456] [cursor=pointer]:
                  - img [ref=e457]: arrow_drop_down
                  - generic [ref=e458]: Spend
              - generic [ref=e461]:
                - generic [ref=e468]:
                  - img "Spend $106.52" [ref=e469]
                  - generic [ref=e478]:
                    - generic [ref=e479]: Spend
                    - generic [ref=e480]: $106.52
                - img [ref=e487]:
                  - generic [ref=e497]:
                    - generic [ref=e499]:
                      - generic [ref=e500]: $104.51
                      - text: $104.51
                    - generic [ref=e502]:
                      - generic [ref=e503]: $2.01
                      - text: $2.01
                  - generic [ref=e504]:
                    - generic [ref=e505]: Joveo Pixel Test Feed
                    - generic [ref=e506]: S-BC-SLOTS
                  - generic [ref=e507]:
                    - generic [ref=e508]: $0
                    - generic [ref=e509]: $20
                    - generic [ref=e510]: $40
                    - generic [ref=e511]: $60
                    - generic [ref=e512]: $80
                    - generic [ref=e513]: $100
                    - generic [ref=e514]: $120
                    - generic [ref=e515]: $140
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: View Publishers
                - img [ref=e519]: arrow_forward
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