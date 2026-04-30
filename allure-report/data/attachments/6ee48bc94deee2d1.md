# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/header.spec.ts >> Header & Global Controls >> 4.1 All Clients Dropdown Opens
- Location: tests/navigation/header.spec.ts:8:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /All Clients/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /All Clients/i })

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
                  - generic [ref=e136]: $9,720
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
                  - generic [ref=e168]: 22,776
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_up
                    - generic [ref=e171]: 215.85% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: 1,690
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_down
                    - generic [ref=e199]: 43.17% from previous month
                - img [ref=e203]
            - generic [ref=e214]:
              - generic [ref=e216] [cursor=pointer]:
                - img [ref=e217]
                - generic [ref=e218]: CPC
                - img [ref=e219]: arrow_drop_down
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - generic [ref=e222]: $0.43
                  - generic [ref=e223]:
                    - img [ref=e224]: arrow_drop_down
                    - generic [ref=e225]: 72.96% from previous month
                - img [ref=e229]
            - generic [ref=e242]:
              - generic [ref=e244] [cursor=pointer]:
                - img [ref=e245]
                - generic [ref=e246]: CPA
                - img [ref=e247]: arrow_drop_down
              - generic [ref=e248]:
                - generic [ref=e249]:
                  - generic [ref=e250]: $5.75
                  - generic [ref=e251]:
                    - img [ref=e252]: arrow_drop_up
                    - generic [ref=e253]: 48.58% from previous month
                - img [ref=e257]
          - generic [ref=e269]:
            - generic [ref=e270]:
              - generic [ref=e271]: Compare performance of
              - button "Spend vs CPA" [ref=e273] [cursor=pointer]:
                - img [ref=e274]: arrow_drop_down
                - generic [ref=e276]:
                  - generic [ref=e279]: Spend
                  - generic [ref=e280]: vs
                  - generic [ref=e283]: CPA
            - img [ref=e292]:
              - generic [ref=e301]: Spend
              - generic [ref=e303]: CPA
              - generic [ref=e320]:
                - generic [ref=e321]: "01"
                - generic [ref=e322]: "03"
                - generic [ref=e323]: "05"
                - generic [ref=e324]: "07"
                - generic [ref=e325]: "09"
                - generic [ref=e326]: "11"
                - generic [ref=e327]: "13"
                - generic [ref=e328]: "15"
                - generic [ref=e329]: "17"
                - generic [ref=e330]: "19"
                - generic [ref=e331]: "21"
                - generic [ref=e332]: "23"
                - generic [ref=e333]: "25"
                - generic [ref=e334]: "27"
                - generic [ref=e335]: "29"
              - generic [ref=e336]:
                - generic [ref=e337]: $0
                - generic [ref=e338]: $3,000
                - generic [ref=e339]: $6,000
                - generic [ref=e340]: $9,000
              - generic [ref=e341]:
                - generic [ref=e342]: $0
                - generic [ref=e343]: $2
                - generic [ref=e344]: $4
                - generic [ref=e345]: $6
          - generic [ref=e347]:
            - generic [ref=e348]:
              - generic [ref=e349]:
                - generic [ref=e350]: Hiring funnel
                - img [ref=e351] [cursor=pointer]: settings
              - generic [ref=e355]:
                - generic [ref=e356]:
                  - generic [ref=e357]:
                    - generic [ref=e358]: Clicks
                    - generic [ref=e359]: 22,776
                  - generic [ref=e360]:
                    - generic [ref=e361]: Apply Starts
                    - generic [ref=e362]: 4,168
                    - generic [ref=e363]: 81.70% Drop
                  - generic [ref=e364]:
                    - generic [ref=e365]: Apply Finish
                    - generic [ref=e366]: 1,690
                    - generic [ref=e367]: 59.45% Drop
                  - generic [ref=e368]:
                    - generic [ref=e369]: Hires
                    - generic [ref=e370]: "191"
                    - generic [ref=e371]: 88.70% Drop
                - img [ref=e375]
            - generic [ref=e392]:
              - generic [ref=e393]: Spend analysis
              - generic [ref=e396]:
                - generic [ref=e397]:
                  - generic [ref=e398]:
                    - img "Spend" [ref=e399]
                    - generic [ref=e400]: Spend
                  - generic [ref=e401]:
                    - img "Proj. spend" [ref=e402]
                    - generic [ref=e403]: Proj. spend
                  - generic [ref=e404]:
                    - img "Prev. month spend" [ref=e405]
                    - generic [ref=e406]: Prev. month spend
                - img [ref=e410]:
                  - generic [ref=e429]:
                    - generic [ref=e430]: "02"
                    - generic [ref=e431]: "04"
                    - generic [ref=e432]: "06"
                    - generic [ref=e433]: "08"
                    - generic [ref=e434]: "10"
                    - generic [ref=e435]: "12"
                    - generic [ref=e436]: "14"
                    - generic [ref=e437]: "16"
                    - generic [ref=e438]: "18"
                    - generic [ref=e439]: "20"
                    - generic [ref=e440]: "22"
                    - generic [ref=e441]: "24"
                    - generic [ref=e442]: "26"
                    - generic [ref=e443]: "28"
                    - generic [ref=e444]: "30"
                  - generic [ref=e445]:
                    - generic [ref=e446]: $0
                    - generic [ref=e447]: $5K
                    - generic [ref=e448]: $10K
                    - generic [ref=e449]: $15K
          - generic [ref=e451]:
            - heading "Publisher statistics" [level=2] [ref=e452]
            - generic [ref=e453]:
              - generic [ref=e454]:
                - generic [ref=e455]: Publishers comparison on
                - button "Spend" [ref=e457] [cursor=pointer]:
                  - img [ref=e458]: arrow_drop_down
                  - generic [ref=e459]: Spend
              - generic [ref=e462]:
                - generic [ref=e469]:
                  - img "Spend $9,720.22" [ref=e470]
                  - generic [ref=e484]:
                    - generic [ref=e485]: Spend
                    - generic [ref=e486]: $9,720.22
                - img [ref=e493]:
                  - generic [ref=e507]:
                    - generic [ref=e509]:
                      - generic [ref=e510]: $4,443.44
                      - text: $4,443.44
                    - generic [ref=e512]:
                      - generic [ref=e513]: $3,902.64
                      - text: $3,902.64
                    - generic [ref=e515]:
                      - generic [ref=e516]: $796
                      - text: $796
                    - generic [ref=e518]:
                      - generic [ref=e519]: $320.33
                      - text: $320.33
                    - generic [ref=e521]:
                      - generic [ref=e522]: $243.01
                      - text: $243.01
                    - generic [ref=e524]:
                      - generic [ref=e525]: $9.71
                      - text: $9.71
                    - generic [ref=e527]:
                      - generic [ref=e528]: $5.09
                      - text: $5.09
                  - generic [ref=e529]:
                    - generic [ref=e530]: JAX USD
                    - generic [ref=e531]: Joveo Exchange USD
                    - generic [ref=e532]: S-BC-CPC
                    - generic [ref=e533]: S-BC-CPA-USD
                    - generic [ref=e534]: S-BC-CPC-EURO
                    - generic [ref=e535]: S-BC-SLOTS
                    - generic [ref=e536]: Joveo Pixel Test Feed
                  - generic [ref=e537]:
                    - generic [ref=e538]: $0
                    - generic [ref=e539]: $1K
                    - generic [ref=e540]: $2K
                    - generic [ref=e541]: $3K
                    - generic [ref=e542]: $4K
                    - generic [ref=e543]: $5K
                    - generic [ref=e544]: $6K
              - generic [ref=e546] [cursor=pointer]:
                - generic [ref=e547]: View Publishers
                - img [ref=e548]: arrow_forward
```

# Test source

```ts
  1  | // spec: specs/mojo-pro-test-plan.md
  2  | // seed: tests/seed.spec.ts
  3  | 
  4  | import { test, expect } from '../../fixtures';
  5  | 
  6  | test.describe('Header & Global Controls', () => {
  7  | 
  8  |   test('4.1 All Clients Dropdown Opens', async ({ mojoproPage: page }) => {
  9  |     const allClientsBtn = page.getByRole('button', { name: /All Clients/i });
> 10 |     await expect(allClientsBtn).toBeVisible();
     |                                 ^ Error: expect(locator).toBeVisible() failed
  11 |     await allClientsBtn.click();
  12 |     await page.waitForTimeout(500);
  13 | 
  14 |     await expect(allClientsBtn).toHaveAttribute('aria-expanded', 'true');
  15 |     await page.keyboard.press('Escape');
  16 |   });
  17 | 
  18 |   test('4.2 Region / Currency Selector Opens', async ({ mojoproPage: page }) => {
  19 |     const regionBtn = page.getByRole('button', { name: /All Regions/i });
  20 |     await expect(regionBtn).toBeVisible();
  21 |     await regionBtn.click();
  22 |     await page.waitForTimeout(500);
  23 | 
  24 |     await expect(regionBtn).toHaveAttribute('aria-expanded', 'true');
  25 |     await page.keyboard.press('Escape');
  26 |   });
  27 | 
  28 |   test('4.3 Page Title is Mojo', async ({ mojoproPage: page }) => {
  29 |     await expect(page).toHaveTitle('Mojo');
  30 |   });
  31 | 
  32 | });
  33 | 
```