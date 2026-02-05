from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to the homepage
        try:
            page.goto("http://localhost:3000")
        except Exception as e:
            print(f"Failed to load page: {e}")
            browser.close()
            return

        # Wait for the app to load
        page.wait_for_selector("nav", timeout=10000)

        # Press Tab to focus the first element (which should be our skip link)
        page.keyboard.press("Tab")

        # Wait for the transition
        time.sleep(0.5)

        # Take a screenshot
        page.screenshot(path="verification/skip_link_focused.png")

        # Verify the element is visible and has correct text
        skip_link = page.locator("a[href='#main-content']")
        if skip_link.is_visible():
            print("Skip link is visible!")
        else:
            print("Skip link is NOT visible!")

        browser.close()

if __name__ == "__main__":
    run()
