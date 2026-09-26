



import {test,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage';
import {PIMPage} from '../page/PIMPage'

test('PIMScenario' , async({page})=>
{

    const loginpage = new LoginPage(page);
    const pimpage = new PIMPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await loginpage.login('Admin','admin123');

    await pimpage.PIM('Ramesh','Suresh','Thakur');

});