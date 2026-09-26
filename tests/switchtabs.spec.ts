import {test, expect} from '@playwright/test';

test ('Tab', async({page,context}) =>
{

await page.goto('https://letcode.in/window');

console.log(page.url());

//listner
const [Newpage] = await Promise.all([

context.waitForEvent('page'), //wait for new tab to open
await page.locator('#home').click()
]);

await Newpage.waitForLoadState();
console.log(Newpage.url());

await Newpage.getByRole('link', { name : 'Contact'}).first().click();

await expect(Newpage.getByRole('link',{name:'Koushik Chatterjee'})).toBeVisible();

await Newpage.waitForTimeout(1500);

await page.bringToFront();
await Newpage.waitForTimeout(1500);

await Newpage.bringToFront();

await Newpage.close();

await page.waitForTimeout(1500);


});