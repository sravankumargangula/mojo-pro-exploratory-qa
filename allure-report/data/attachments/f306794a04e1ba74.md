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
                  - generic [ref=e136]: $702
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
                  - generic [ref=e168]: "118"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.48% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: "16"
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_down
                    - generic [ref=e199]: 99.05% from previous month
                - img [ref=e203]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - img [ref=e219]
                - generic [ref=e220]: CPC
                - img [ref=e221]: arrow_drop_down
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: $5.96
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_up
                    - generic [ref=e227]: 1,390.00% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $43.92
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_up
                    - generic [ref=e255]: 717.88% from previous month
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
              - generic [ref=e328]:
                - generic [ref=e329]: "01"
                - generic [ref=e330]: "03"
                - generic [ref=e331]: "05"
                - generic [ref=e332]: "07"
                - generic [ref=e333]: "09"
                - generic [ref=e334]: "11"
                - generic [ref=e335]: "13"
                - generic [ref=e336]: "15"
                - generic [ref=e337]: "17"
                - generic [ref=e338]: "19"
                - generic [ref=e339]: "21"
                - generic [ref=e340]: "23"
                - generic [ref=e341]: "25"
                - generic [ref=e342]: "27"
              - generic [ref=e343]:
                - generic [ref=e344]: $0
                - generic [ref=e345]: $100
                - generic [ref=e346]: $200
                - generic [ref=e347]: $300
              - generic [ref=e348]:
                - generic [ref=e349]: $0
                - generic [ref=e350]: $100
                - generic [ref=e351]: $200
                - generic [ref=e352]: $300
          - generic [ref=e354]:
            - generic [ref=e355]:
              - generic [ref=e356]:
                - generic [ref=e357]: Hiring funnel
                - img [ref=e358] [cursor=pointer]: settings
              - generic [ref=e362]:
                - generic [ref=e363]:
                  - generic [ref=e364]:
                    - generic [ref=e365]: Clicks
                    - generic [ref=e366]: "118"
                  - generic [ref=e367]:
                    - generic [ref=e368]: Apply Starts
                    - generic [ref=e369]: "54"
                    - generic [ref=e370]: 54.24% Drop
                  - generic [ref=e371]:
                    - generic [ref=e372]: Apply Finish
                    - generic [ref=e373]: "16"
                    - generic [ref=e374]: 70.37% Drop
                  - generic [ref=e375]:
                    - generic [ref=e376]: Hires
                    - generic [ref=e377]: "0"
                    - generic [ref=e378]: 100% Drop
                - img [ref=e382]
            - generic [ref=e405]:
              - generic [ref=e406]: Spend analysis
              - generic [ref=e409]:
                - generic [ref=e410]:
                  - generic [ref=e411]:
                    - img "Spend" [ref=e412]
                    - generic [ref=e413]: Spend
                  - generic [ref=e414]:
                    - img "Proj. spend" [ref=e415]
                    - generic [ref=e416]: Proj. spend
                  - generic [ref=e417]:
                    - img "Prev. month spend" [ref=e418]
                    - generic [ref=e419]: Prev. month spend
                - img [ref=e423]:
                  - generic [ref=e442]:
                    - generic [ref=e443]: "01"
                    - generic [ref=e444]: "03"
                    - generic [ref=e445]: "05"
                    - generic [ref=e446]: "07"
                    - generic [ref=e447]: "09"
                    - generic [ref=e448]: "11"
                    - generic [ref=e449]: "13"
                    - generic [ref=e450]: "15"
                    - generic [ref=e451]: "17"
                    - generic [ref=e452]: "19"
                    - generic [ref=e453]: "21"
                    - generic [ref=e454]: "23"
                    - generic [ref=e455]: "25"
                    - generic [ref=e456]: "27"
                    - generic [ref=e457]: "29"
                    - generic [ref=e458]: "31"
                  - generic [ref=e459]:
                    - generic [ref=e460]: $0
                    - generic [ref=e461]: $5K
                    - generic [ref=e462]: $10K
                    - generic [ref=e463]: $15K
          - generic [ref=e465]:
            - heading "Publisher statistics" [level=2] [ref=e466]
            - generic [ref=e467]:
              - generic [ref=e468]:
                - generic [ref=e469]: Publishers comparison on
                - button "Spend" [ref=e471] [cursor=pointer]:
                  - img [ref=e472]: arrow_drop_down
                  - generic [ref=e473]: Spend
              - generic [ref=e476]:
                - generic [ref=e483]:
                  - img "Spend $702.79" [ref=e484]
                  - generic [ref=e497]:
                    - generic [ref=e498]: Spend
                    - generic [ref=e499]: $702.79
                - img [ref=e506]:
                  - generic [ref=e520]:
                    - generic [ref=e522]:
                      - generic [ref=e523]: $526.47
                      - text: $526.47
                    - generic [ref=e525]:
                      - generic [ref=e526]: $109.11
                      - text: $109.11
                    - generic [ref=e528]:
                      - generic [ref=e529]: $23.17
                      - text: $23.17
                    - generic [ref=e531]:
                      - generic [ref=e532]: $21.04
                      - text: $21.04
                    - generic [ref=e534]:
                      - generic [ref=e535]: $13
                      - text: $13
                    - generic [ref=e537]:
                      - generic [ref=e538]: $10
                      - text: $10
                  - generic [ref=e539]:
                    - generic [ref=e540]: Sanity test pub
                    - generic [ref=e541]: Joveo Pixel Test Feed
                    - generic [ref=e542]: S-BC-SLOTS
                    - generic [ref=e543]: S-BC-CPC-EURO
                    - generic [ref=e544]: Joveo Pixel Test Feed USD
                    - generic [ref=e545]: S-BC-CPC
                  - generic [ref=e546]:
                    - generic [ref=e547]: $0
                    - generic [ref=e548]: $100
                    - generic [ref=e549]: $200
                    - generic [ref=e550]: $300
                    - generic [ref=e551]: $400
                    - generic [ref=e552]: $500
                    - generic [ref=e553]: $600
                    - generic [ref=e554]: $700
              - generic [ref=e556] [cursor=pointer]:
                - generic [ref=e557]: View Publishers
                - img [ref=e558]: arrow_forward
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