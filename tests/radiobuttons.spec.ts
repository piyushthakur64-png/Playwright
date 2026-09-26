import {test, expect} from '@playwright/test';

test('radiobuttons', async ({ page }) => 
{

await page.goto('https://letcode.in/radio');

await expect(page).toHaveTitle(/Radio Buttons/i);

await expect(page.getByRole('heading', { name : 'Radio & Checkbox'})).toBeVisible();

//Validation  of Radio Buttons

await page.locator('input#yes').check(); //validate button is enabled, visible,checked if checked then skip else click on it
await expect(page.locator('input#yes')).toBeChecked(); //assertiion to verify the button is selected

 const radiovalue = await page.locator('input#yes').isChecked(); // it will return boolean value true or false will required this in if else
 console.log(radiovalue);


const beforecheck = await page.locator('input#no').isChecked();
console.log(beforecheck);
//await expect(page.locator('input#no')).toBeChecked();

await page.locator('input#no').check(); //validate button is enabled, visible,checked if checked then skip else click on it
await expect(page.locator('input#no')).toBeChecked(); //assertiion to verify the button is selected

const radiovalueNo = await page.locator('input#no').isChecked(); // it will return boolean value true or false will required this in if else
console.log(radiovalueNo);

//other radio buttons Flow
/*
1) check
2) expect validation its checked
3) to get value*/

const secondbefore = await page.locator('input#one').isChecked();

await console.log(secondbefore);

const second = await page.locator('input#one').check();

await expect(page.locator('input#one')).toBeChecked();

const afterclicksecond = await page.locator('input#one').isChecked();
await console.log(afterclicksecond);


//to check the check box is unchecked

await page.locator('input#nobug').uncheck();
await expect(page.locator('input#nobug')).not.toBeChecked();
console.log(await page.locator('input#nobug').isChecked());

await page.getByRole('radio', {name : 'Foo'}).check();
await expect(page.getByRole('radio', {name : 'Foo'})).toBeChecked();

//validate enabled and disabled


await page.getByRole('radio', { name : 'Going', exact : true}).scrollIntoViewIfNeeded();
await page.waitForTimeout(3000);
await expect(page.getByRole('radio', { name : 'Going', exact : true})).toBeEnabled();
await expect(page.locator('input#maybe')).toBeDisabled();
const enabledDisabledValue = await page.locator('input#maybe').isDisabled(); //will return boolean value true or false
await console.log(enabledDisabledValue);

//checkbox
const checkbox =  await page.getByLabel('Remember me');
await checkbox.scrollIntoViewIfNeeded();
await page.waitForTimeout(3000);
await checkbox.check();
await expect(checkbox).toBeChecked();

await page.getByLabel('I agree to the').check();
await expect(page.getByRole('checkbox', {name : 'I agree to the'})).toBeChecked();


});

//Radio Button

   // 1) Chekc() -- Will check if the button is enabled,visible and checked or not if it is checked then skip else click on it
   // 2) uncheck() - it will check if the button is uncheck or not if uncheck then skip if not then uncheck the button
   // 3) .ischecked() -- to check if the button is checked or not if checked then true if not then false
   // Assertion
   // 4) .toBeChecked() -- To validate button is checked or not and if not checked then step will fail
   // 5) .not.toBeChecked() -- To validate buuton is unchecked or checked if checked then step will fail