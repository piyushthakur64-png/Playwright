import {test, expect} from '@playwright/test'

test ('dropdown with selectoption method' , async({page}) => 
{

    await  page.goto('https://letcode.in/dropdowns');
    await expect(page).toHaveTitle(/Dropdowns/i);
    await expect(page.getByRole('heading', {name: 'Dropdown'})).toBeVisible();
    await expect(page.locator('#fruits')).toBeEditable();

    await page.locator('#fruits').selectOption({value : '0'}); // By value attribute
    await expect(page.getByText('You have selected Apple')).toBeVisible();

    await page.locator('#fruits').selectOption('Orange'); //By Visible Text
    await expect(page.getByText('You have selected Orange')).toBeVisible();

    await page.locator('#fruits').selectOption({label : 'Banana'}); //By label
    await expect(page.getByText('You have selected Banana')).toBeVisible();

     await page.locator('#fruits').selectOption({index : 2}); //By index
     await expect(page.getByText('You have selected Mango')).toBeVisible();


});


test ('Multple Select from dropdown', async({page}) =>
{

    await page.goto('https://letcode.in/dropdowns');
    await expect(page).toHaveTitle(/Dropdowns/i);
    const multiple = await page.locator('#superheros');
    //multiple.selectOption(['Aquaman','Captain America']); //Select By text

    //await multiple.selectOption([{value : 'aq'} , {value : 'ca'}]); //By Value

    //await multiple.selectOption([{label : 'Aquaman'}, {label : 'Captain America'}]);//by label

    await multiple.selectOption([{index : 1} , {index : 6}]);//By Index

    await expect(page.getByText('Aquaman, Captain America')).toBeVisible();

    await page.waitForTimeout(1500);
});

test ('select last language' , async({page}) =>
{

    await page.goto('https://letcode.in/dropdowns');
    await expect(page).toHaveTitle(/Dropdowns/i);

    const languagecount = await page.locator('#lang')
    const language = await languagecount.locator('option').allTextContents();
    await console.log(language);

    const count = await await languagecount.locator('option').count();
    console.log(count);
 
    await languagecount.selectOption({index : count-1});
    await page.waitForTimeout(1500);

    await page.getByText('You have selected C#');

});

test('dynamic dropdown', async ({page}) =>

{

    await page.goto('https://www.wikipedia.org/');
    //await expect(page.getByText('Wikipedia')).toBeVisible();
    await page.locator('input#searchInput').pressSequentially('India', {delay : 100});
    await page.locator('.suggestions-dropdown').waitFor({state:'visible', timeout : 15000});
    const linkcount = await page.locator ('a.suggestion-link').count();
    console.log(linkcount);

    await page.locator('a.suggestion-link').filter({hasText : 'Indian National Congress'}).click();
    await expect(page.getByRole('heading', {name : 'Indian National Congress'})).toBeVisible();

    await page.waitForTimeout(1500);

});
