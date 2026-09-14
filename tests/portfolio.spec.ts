import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
const latest = JSON.parse(readFileSync("public/cv/latest.json", "utf8"));

for (const width of [320, 390, 768, 1440]) {
  test(`layout and content at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 950 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText("applied AI");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator("body")).not.toContainText(
      "Senior Software Engineer",
    );
    await expect(
      page.getByRole("heading", { name: "DataFort Limited" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/sohel-rana",
    );
    await page.screenshot({
      path: `/tmp/portfolio-hero-${width}.png`,
      animations: "disabled",
    });
    await page.screenshot({
      path: `/tmp/portfolio-${width}.png`,
      fullPage: true,
      animations: "disabled",
    });
    await page
      .locator("#skills")
      .evaluate((section) =>
        section.scrollIntoView({ behavior: "instant", block: "start" }),
      );
    await expect(page.locator("#skills")).toHaveClass(/revealed/);
    await expect(page.locator("#skills > .container")).toHaveCSS(
      "opacity",
      "1",
    );
    await page.screenshot({
      path: `/tmp/portfolio-skills-${width}.png`,
      animations: "disabled",
    });
    await page.getByText("More tools & technologies", { exact: true }).focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".skills-detail-list")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.screenshot({
      path: `/tmp/portfolio-contact-${width}.png`,
      animations: "disabled",
    });
    for (const summary of await page.locator("#work summary").all()) {
      await summary.click();
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
  });
}

test("mobile navigation, keyboard controls, and reduced motion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  const menu = page.locator(".menu-toggle");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(
    await page
      .locator("#work")
      .evaluate((el) => el.getBoundingClientRect().top),
  ).toBeGreaterThanOrEqual(72);
  await page.getByText("Inside my work on Robo2mation").focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("heading", { name: "Configurable workflows" }),
  ).toBeVisible();
  expect(
    await page
      .locator("h1")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});

test("every CV link uses the latest PDF, including offline manifest and mobile", async ({
  page,
}) => {
  await page.goto("/");
  const links = page.locator("a[download]");
  for (let i = 0; i < (await links.count()); i++) {
    await expect(links.nth(i)).toHaveAttribute("href", latest.url);
  }
  for (const offline of [false, true]) {
    if (offline)
      await page.route("**/cv/latest.json?*", (route) => route.abort());
    const download = page.waitForEvent("download");
    await page
      .locator(".hero-actions")
      .getByRole("link", { name: "Download CV" })
      .click();
    expect((await download).suggestedFilename()).toBe(latest.filename);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu" }).click();
  const download = page.waitForEvent("download");
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Download CV" })
    .click();
  expect((await download).suggestedFilename()).toBe(latest.filename);
  const response = await page.request.get(latest.url);
  expect(response.ok()).toBe(true);
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("form preserves input on failure and confirms success only after response", async ({
  page,
}) => {
  let mode: "failure" | "network" | "success" = "failure";
  let release: (() => void) | undefined;
  await page.route("https://formspree.io/**", async (route) => {
    if (mode === "network") return route.abort();
    if (mode === "success")
      await new Promise<void>((resolve) => {
        release = resolve;
      });
    await route.fulfill({
      status: mode === "failure" ? 422 : 200,
      contentType: "application/json",
      body: JSON.stringify(
        mode === "failure"
          ? { errors: [{ message: "Test failure" }] }
          : { ok: true },
      ),
    });
  });
  await page.goto("/");
  await page.getByLabel("Your name").fill("Mock test");
  await page.getByLabel("Email address").fill("test@example.com");
  await page.getByLabel("Subject").fill("Mock only");
  await page
    .getByLabel("Message", { exact: true })
    .fill("This never leaves the browser test.");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("alert")).toContainText("couldn’t confirm");
  await expect(page.getByLabel("Message", { exact: true })).toHaveValue(
    "This never leaves the browser test.",
  );
  mode = "network";
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("alert")).toBeVisible();
  await expect(page.getByLabel("Your name")).toHaveValue("Mock test");
  mode = "success";
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("button", { name: "Sending…" })).toBeDisabled();
  await expect(
    page.getByText("Your message was sent.", { exact: false }),
  ).toHaveCount(0);
  await expect.poll(() => Boolean(release)).toBe(true);
  release!();
  await expect(
    page.getByRole("button", { name: "Message sent" }),
  ).toBeDisabled();
  await expect(
    page.getByText("Your message was sent.", { exact: false }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Continue" }).click();
  await expect(page).toHaveURL("/thank-you");
  await expect(
    page.getByRole("heading", { name: "Thanks for your message." }),
  ).toBeVisible();
});

test("direct thank-you visit does not falsely claim a submission", async ({
  page,
}) => {
  await page.goto("/thank-you");
  await expect(
    page.getByRole("heading", { name: "Thanks for stopping by." }),
  ).toBeVisible();
});
