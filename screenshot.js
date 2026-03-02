const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    if (!fs.existsSync('gig-assets')) {
        fs.mkdirSync('gig-assets');
    }

    const browser = await chromium.launch();

    // Screenshot 1: Full Desktop
    console.log("Generating Screenshot 1: Desktop...");
    const contextDesktop = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page1 = await contextDesktop.newPage();
    await page1.goto('http://localhost:3000');
    await page1.waitForTimeout(3000); // 3s wait for anims
    await page1.screenshot({ path: 'gig-assets/screenshot-1-desktop.png', fullPage: true });
    await contextDesktop.close();

    // Screenshot 2: Mobile
    console.log("Generating Screenshot 2: Mobile...");
    const contextMobile = await browser.newContext({
        viewport: { width: 375, height: 812 },
        isMobile: true,
        hasTouch: true
    });
    const page2 = await contextMobile.newPage();
    await page2.goto('http://localhost:3000');
    await page2.waitForTimeout(3000);
    await page2.screenshot({ path: 'gig-assets/screenshot-2-mobile.png', fullPage: true });
    await contextMobile.close();

    // Screenshot 3: Dark Mode
    // My dashboard is dark mode by default, but to fulfill "with Dark Mode enabled" explicitly,
    // we capture it explicitly stating colorScheme: 'dark'
    console.log("Generating Screenshot 3: Dark Mode...");
    const contextDark = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        colorScheme: 'dark'
    });
    const page3 = await contextDark.newPage();
    await page3.goto('http://localhost:3000');
    await page3.waitForTimeout(3000);
    await page3.screenshot({ path: 'gig-assets/screenshot-3-dark-mode.png', fullPage: true });
    await contextDark.close();

    await browser.close();
    console.log("All screenshots successfully saved to gig-assets!");
})();
