import {test, expect} from '@playwright/test';

test('uploadwithinputtag', async({page})=>
{
    await page.goto('https://letcode.in/file');
    await expect(page.getByText('Upload and Download').nth(1)).toBeVisible();

    await page.setInputFiles("input[type='file']","C:/Users/piyus/Downloads/PlayWrightAutomation.zip");

    await expect(page.getByText('PlayWrightAutomation.zip')).toBeVisible();

    await page.waitForTimeout(1500);

});

test('upload files', async({page}) =>
{
await page.goto('http://trace.playwright.dev/');

const [File] = await Promise.all([

    page.waitForEvent('filechooser'),
await page.getByRole('button', {name: 'Select file'}).click()

]);


await File.setFiles("C:/Users/piyus/Downloads/trace.zip");

await expect(page.getByText('HandleAlert.spec.ts:47 › Modern Alert')).toBeVisible();

});

test('multipleupload with ste input file', async({page})=>
{

await page.goto('https://letcode.in/file');
    await expect(page.getByText('Upload and Download').nth(1)).toBeVisible();

    await page.setInputFiles("input[type='file']",["C:/Users/piyus/Downloads/PlayWrightAutomation.zip",
        "C:/Users/piyus/Downloads/Piyush-4.pdf"]);

    await expect(page.getByText('PlayWrightAutomation.zip')).toBeVisible();

    await page.waitForTimeout(1500);
});

test('uploadwithmultiplewithsetfile',async({page})=>
{

    await page.goto('http://trace.playwright.dev/');

const [File] = await Promise.all([

    page.waitForEvent('filechooser'),
await page.getByRole('button', {name: 'Select file'}).click()

]);


await File.setFiles(["C:/Users/piyus/Downloads/trace.zip","C:/Users/piyus/Downloads/Piyush-4.pdf"]);

await expect(page.getByText('HandleAlert.spec.ts:47 › Modern Alert')).toBeVisible();
    
});

test('downloadfile', async({page})=>
{

    await page.goto('https://letcode.in/file');
    await expect(page.getByText('Upload and Download').nth(1)).toBeVisible();

    

    const [download] = await Promise.all ([

        page.waitForEvent('download'),
        await page.getByRole('link', {name: 'Download Excel'}).click()

    ]);

    await download.saveAs('.download/excel.xlsx');

});

