// Write a Playwright test that opens salesforce website and navigate from login page to homepage and try to retrive the title.

import test from "@playwright/test";

test("salesforce",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.locator("#Login").click()
    const pagetitle=await page.title()
    console.log(pagetitle)
    await page.waitForTimeout(2000)
})




