import{test,expect} from '@playwright/test';
import{LoginPage} from '../page/LoginPage';


test("ValidLogin", async({page}) =>
    {
        const loginpage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await loginpage.login('Admin','admin123');
    


});


test('invalidlogin', async({page}) =>
    {
        const loginpage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await loginpage.invalidlogin('Admin1','admin1231');


});

