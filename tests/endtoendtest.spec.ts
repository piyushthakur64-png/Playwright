
import{test,expect} from '@playwright/test'

test ('endtoendtest', async({page}) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button',{name : 'Login'}).click();

await expect(page.getByRole('heading', {name : 'Dashboard'})).toBeVisible();

const PIM = await page.getByRole('link', {name : 'PIM'});

await PIM.click();

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

// page.getByPlaceholder('Type for hints...').fill('Ramesh')

await page.getByRole('button', {name : ' Add'}).click();


await page.getByPlaceholder('First Name').fill('Ramesh');
await page.getByPlaceholder('Middle Name').fill('Suresh');
await page.getByPlaceholder('Last Name').fill('Patil');

const employeeid = page.locator('.oxd-input-group')
.filter({has:page.locator('label', {hasText :'Employee Id'})})
.locator('.oxd-input.oxd-input--active')


const employeevalue = await employeeid.inputValue();

console.log(employeevalue);

// page.on('dialog', async dialog => {

//     console.log(dialog.type());
//     console.log(dialog.message());
//     await dialog.accept();

// });

await page.getByRole('button', {name : 'Save'}).click();


//await expect(page.getByText('Successfully Saved')).toBeVisible({timeout: 5000});

//const successmessage = await page.getByText('Successfully Saved').textContent();
//console.log(successmessage);

await page.waitForTimeout(1500);
await PIM.click();
await employeeid.fill(employeevalue);

await page.getByRole('button', {name: 'Search'}).click();


const employeedetail = page.locator('.oxd-table-card')
	.filter({hasText: employeevalue})
	.first();

await expect(employeedetail).toBeVisible();
await employeedetail.click();

const empid = await page.locator('.oxd-input-group')
.filter({has:page.locator('label', {hasText :'Employee Id'})})
.locator('.oxd-input.oxd-input--active')

await expect(empid).toHaveValue(employeevalue);

const calender = page.locator('.oxd-input-group')
.filter({has:page.locator('label', {hasText :'License Expiry Date'})})
.locator('.oxd-input.oxd-input--active')

//const calender = await page.locator('.oxd-input-group')
//.filter({hasText :'License Expiry Date'});

//await expect(calender).toBeVisible();





//await calender.waitFor({ state: 'visible' });
//await calender.click();
await calender.fill('1996-02-01');

await page.waitForTimeout(1500);









});