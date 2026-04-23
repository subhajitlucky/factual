import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3133');
  await page.waitForTimeout(4000);
  
  // Full page
  await page.screenshot({ 
    path: '/home/subhajit/.gemini/antigravity/brain/5129897e-4294-42ad-87fc-95d1e4d54fab/artifacts/final_desktop_full.png', 
    fullPage: true 
  });
  
  // Hero above fold
  await page.screenshot({ 
    path: '/home/subhajit/.gemini/antigravity/brain/5129897e-4294-42ad-87fc-95d1e4d54fab/artifacts/final_hero.png'
  });
  
  // Scroll to features
  await page.evaluate(() => document.getElementById('features')?.scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ 
    path: '/home/subhajit/.gemini/antigravity/brain/5129897e-4294-42ad-87fc-95d1e4d54fab/artifacts/final_features.png'
  });
  
  // Scroll to results
  await page.evaluate(() => document.getElementById('results')?.scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ 
    path: '/home/subhajit/.gemini/antigravity/brain/5129897e-4294-42ad-87fc-95d1e4d54fab/artifacts/final_results.png'
  });
  
  // Scroll to FAQ
  await page.evaluate(() => document.getElementById('faq')?.scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ 
    path: '/home/subhajit/.gemini/antigravity/brain/5129897e-4294-42ad-87fc-95d1e4d54fab/artifacts/final_faq.png'
  });
  
  // Scroll to footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ 
    path: '/home/subhajit/.gemini/antigravity/brain/5129897e-4294-42ad-87fc-95d1e4d54fab/artifacts/final_footer.png'
  });
  
  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ 
    path: '/home/subhajit/.gemini/antigravity/brain/5129897e-4294-42ad-87fc-95d1e4d54fab/artifacts/final_mobile.png',
    fullPage: true
  });

  await browser.close();
  console.log("All screenshots captured!");
})();
