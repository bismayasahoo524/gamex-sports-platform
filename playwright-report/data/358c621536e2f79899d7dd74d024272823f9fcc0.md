# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration-flow.spec.ts >> athlete can register for an event
- Location: tests\e2e\registration-flow.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /GameX/i
Received string:  "organizer-dashboard"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "organizer-dashboard"

```

```yaml
- img "React logo"
- img "Vite logo"
- heading "Get started" [level=1]
- paragraph:
  - text: Edit
  - code: src/App.tsx
  - text: and save to test
  - code: HMR
- button "Count is 0"
- heading "Documentation" [level=2]
- paragraph: Your questions, answered
- list:
  - listitem:
    - link "Explore Vite":
      - /url: https://vite.dev/
  - listitem:
    - link "Learn more":
      - /url: https://react.dev/
- heading "Connect with us" [level=2]
- paragraph: Join the Vite community
- list:
  - listitem:
    - link "GitHub":
      - /url: https://github.com/vitejs/vite
  - listitem:
    - link "Discord":
      - /url: https://chat.vite.dev/
  - listitem:
    - link "X.com":
      - /url: https://x.com/vite_js
  - listitem:
    - link "Bluesky":
      - /url: https://bsky.app/profile/vite.dev
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("athlete can register for an event", async ({ page }) => {
  4  |   await page.goto("/");
  5  | 
> 6  |   await expect(page).toHaveTitle(/GameX/i);
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  7  | 
  8  |   // Navigate to the registration flow.
  9  |   await page.getByRole("link", { name: /events/i }).click();
  10 | 
  11 |   // Select an event.
  12 |   await page.getByRole("link", { name: /register/i }).first().click();
  13 | 
  14 |   // Complete registration.
  15 |   await page.getByLabel(/athlete/i).fill("Test Athlete");
  16 | 
  17 |   await page.getByRole("button", {
  18 |     name: /register/i,
  19 |   }).click();
  20 | 
  21 |   // Verify user-visible confirmation.
  22 |   await expect(
  23 |     page.getByText(/registration/i)
  24 |   ).toBeVisible();
  25 | });
```