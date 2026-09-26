import {test, expect} from '@playwright/test';

test.only("Sauce", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs"); //Browser Title
    await expect(page.getByText('Swag Labs')).toBeVisible(); //Text on UI

    //Login

    await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce');
    //await page.getByRole('button', { name: 'Login'}).click();  //Click with ByRole

    await page.waitForTimeout(3000);

    await page.locator('input.submit-button.btn_action').click(); //Click with CSS selector
    await expect(page).toHaveURL(/inventory\.html/); //URL validation using part of URL
    await expect(page.getByText('Products')).toBeVisible(); //Text on UI
    await expect(page.locator('.title')).toHaveText('Products'); //Text validation using CSS selector it will search in DOM

   await page.locator('button[id = add-to-cart-sauce-labs-backpack]').click(); 

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');



      
});

//login with xpath
test("Login with Xpath", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await expect(page.locator('//div[@class="login_logo"]')).toHaveText('Swag Labs');

    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();

});

test('XQ website', async ({page}) => {

    await page.goto("https://xqa.io/practice");
    await expect(page).toHaveURL('https://xqa.io/practice');
    await expect(page).toHaveTitle(/practice exercises/i);

    console.log(await page.title()); //print the title of page in console

    await page.getByRole('heading', { name: 'Elements'}).click();

    await page.waitForTimeout(3000);

    await expect(page.getByLabel('Full Name')).toBeVisible();
    
    await page.getByLabel('Full Name').click();
    await page.getByLabel('Full Name').fill('John Doe');

    //await page.locator('input#userName').fill('Playwright User');

    console.log(await page.getByLabel('Full Name').inputValue()); //print the value of textbox
    await expect(page.getByLabel('Full Name')).toHaveValue('John Doe'); //to validate the value which we have provided in textbox 

    await page.locator('input#userEmail').pressSequentially('playwrightuser@gmail.com', { delay: 100 }); //enter email

    await page.getByLabel('Current Address').pressSequentially('123 Jarvari Society', { delay: 100 }); //enter address
    await page.getByLabel('Current Address').dblclick(); //double click on current address using mouse
   await page.getByLabel('Current Address').clear(); //clear the current address
   const updated = await page.getByLabel('Current Address');
    await updated.fill('C-602 Jarvari Society, Pune'); //enter address
    console.log(await updated.inputValue()); //print address

    const padd = await page.locator('textarea#permanentAddress');
    await padd.fill('Mumbai for tour'); //enter permanent address
    await page.waitForTimeout(3000);
    await padd.press('Control+A'); //select all text
    await padd.press('Backspace');
    await expect(padd).toBeEmpty();
    await padd.pressSequentially('C-602 Jarvari Society, Print Permanent Address', {delay : 100}); //enter permanent address
    console.log(await padd.inputValue()); //print permanent address

    const btn = await page.getByRole('button', { name: 'Submit'});
    await page.waitForTimeout(3000);
    await btn.scrollIntoViewIfNeeded(); //scroll to submit button
    await page.waitForTimeout(3000);
    await btn.click();  //click on submit button
    await page.waitForTimeout(3000);

    //Locator Chaining

    console.log(await page.locator('div#output').locator('p').count());

    const first = await page.locator('div#output').locator('p').first().textContent();
    console.log(first);

    const second = await page.locator('div#output').locator('p').nth(1).textContent();
    console.log(second);

    const third = await page.locator('div#output').locator('p').nth(2).textContent();
    console.log(third);

    const fourth = await page.locator('div#output').locator('p').nth(3).textContent();
    console.log(fourth);

//toHaveText -- this will check for the exact text and toContainText -- this will check for the part of text
await expect(page.locator('div#output').locator('p').first()).toHaveText('Name: John Doe');
await expect(page.locator('div#output').locator('p').nth(1)).toContainText('playwrightuser@gmail.com');

await page.getByLabel('Full Name').scrollIntoViewIfNeeded();


});

test('pageoperations', async ({page}) => {

    await page.goto("https://xqa.io/practice");
    await page.waitForTimeout(3000);
    await page.getByRole('heading', { name: 'Elements'}).click();
    await page.waitForTimeout(3000);
    await expect(page.getByLabel('Full Name')).toBeVisible();

    //reload page
    await page.waitForTimeout(3000);
    await page.reload();
//click back
    await page.waitForTimeout(3000);
    await page.goBack();

    //click forward

    await page.waitForTimeout(3000);
    await page.goForward();


});
