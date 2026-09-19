import { test, expect } from "@playwright/test";

test("athlete can register for an event", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/GameX/i);

  // Navigate to the registration flow.
  await page.getByRole("link", { name: /events/i }).click();

  // Select an event.
  await page.getByRole("link", { name: /register/i }).first().click();

  // Complete registration.
  await page.getByLabel(/athlete/i).fill("Test Athlete");

  await page.getByRole("button", {
    name: /register/i,
  }).click();

  // Verify user-visible confirmation.
  await expect(
    page.getByText(/registration/i)
  ).toBeVisible();
});