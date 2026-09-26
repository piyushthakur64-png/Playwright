import{test,expect} from '@playwright/test';

test('table', async({page})=>
{

await page.goto('https://the-internet.herokuapp.com/');

await page.getByRole('link', {name: 'Sortable Data Tables'}).click();
await page.waitForLoadState('networkidle');
await page.waitForLoadState('load');

//to get row count

const rowcount = await page.locator('#table1 tbody tr').count();

console.log('rowcount:', rowcount);

//to get column count

const columncount = await page.locator('#table1 thead tr th').count();

console.log('columncount:', columncount);

//to get the first data from first row

const firstrowdata = await page.locator('#table1 tbody tr').first().textContent();

console.log(firstrowdata);

//to get data from unique id here we used email because email is unique

const website = await page.locator('#table1 tbody tr').filter({hasText : 'jdoe@hotmail.com'}).locator('td').nth(4);
//const site = await website.textContent();
console.log(await website.textContent());

//to get all content of table

const tabledata = await page.locator('#table1 tbody tr').allTextContents();

console.log(tabledata);

//to get the first elemnet form first row

const firstdatafirstrow = await page.locator('#table1 tbody tr td').first().textContent();
console.log(firstdatafirstrow);


});