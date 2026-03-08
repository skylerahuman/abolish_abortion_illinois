import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 720})
        page = await context.new_page()
        file_path = f"file://{os.path.abspath('index.html')}"
        await page.goto(file_path)
        # Wait for any potential animations
        await page.wait_for_timeout(1000)
        await page.screenshot(path="screenshot_desktop.png")

        # Mobile
        context_mobile = await browser.new_context(viewport={'width': 400, 'height': 800})
        page_mobile = await context_mobile.new_page()
        await page_mobile.goto(file_path)
        await page_mobile.wait_for_timeout(1000)
        await page_mobile.screenshot(path="screenshot_mobile.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
