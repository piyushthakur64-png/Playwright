import {test,expect} from '@playwright/test'

test ('frames', async({page})=>
{
await page.goto('https://letcode.in/frame');
await expect(page.getByRole('heading', {name : 'Frame',exact : true})).toBeVisible();
const frame1 = await page.frameLocator('iframe#firstFr');
await frame1.getByPlaceholder('Enter name').fill('Frame test');

await console.log(await frame1.getByPlaceholder('Enter name').inputValue());

await expect(frame1.getByPlaceholder('Enter name')).toHaveValue("Frame test");

const frame2 = frame1.frameLocator("[src='/innerframe']");

await frame2.getByPlaceholder('Enter email').fill('fram@email.com');

console.log(await frame2.getByPlaceholder('Enter email').inputValue());

await expect(frame2.getByPlaceholder('Enter email')).toHaveValue('fram@email.com');

await page.waitForTimeout(1500);
});