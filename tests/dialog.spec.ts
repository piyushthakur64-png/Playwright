import {test, expect} from '@playwright/test';

test('Simple Dialog', async ({page}) =>
{

await page.goto('https://letcode.in/alert');

//to check the dialog box is open or not its listner
page.on('dialog' , async dialog => {

console.log(dialog.type());
console.log(dialog.message());
await dialog.accept();

});

await page.locator('#accept').click();

});

test('Confirm Dialog', async({page})=>
{
    await page.goto('https://letcode.in/alert');

    page.on('dialog', async dialog =>

        {
            console.log(dialog.type());
            console.log(dialog.message());
            await dialog.dismiss();

        }
    );
    await page.getByRole('button', {name: 'Confirm Alert'}).click();

});

test('Prompt Dialog', async({page})=>
{
    await page.goto('https://letcode.in/alert');

    page.on('dialog', async dialog =>{

        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept('My Name is Piyush');


    });


await page.getByRole('button', {name: 'Prompt Alert'}).click();


});

test('Modern Alert', async({page})=>

    {
        await page.goto('https://letcode.in/alert');
        await page.getByRole('button',{name: 'Modern Alert'}).click();
        await console.log(await page.locator('.modal-content').textContent());
        await page.locator(".modal-close").click();


    });

    