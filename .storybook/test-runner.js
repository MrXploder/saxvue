/** @type {import('@storybook/test-runner').TestRunnerConfig} */
module.exports = {
  setup() {
    const { toMatchImageSnapshot } = require("jest-image-snapshot");
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page) {
    // Give Playwright extra time for heavier stories (Navbar, etc.)
    page.setDefaultTimeout(15000);
  },
  async postVisit(page, context) {
    // Wait for animations / async renders to settle
    await page.waitForTimeout(300);

    // Visual regression: screenshot every story and compare with baseline
    const elementHandler = await page.$("#storybook-root");
    if (!elementHandler) return;

    // Some components (e.g. Navbar) render with zero root height.
    // Fall back to a full-page screenshot when the element is not visible.
    const box = await elementHandler.boundingBox();
    const image =
      box && box.width > 0 && box.height > 0
        ? await elementHandler.screenshot()
        : await page.screenshot();

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: `${process.cwd()}/.storybook/snapshots`,
      customSnapshotIdentifier: context.id,
      failureThreshold: 0.03,
      failureThresholdType: "percent",
    });
  },
};
