import {Page,Locator,expect} from '@playwright/test'
export class LoginPage{

    readonly page:Page;

    constructor(page:Page){

        this.page=page;
    }

    get usernameField()

    {
       return this.page.getByRole('textbox', {name: 'Username'});
    }

    get passwordField()

    {
        return this.page.getByPlaceholder('Password');
    }

    get LoginButton()
    {
        return this.page.getByRole('button',{name : 'Login'});
    }


    get dashboard()
    
    {
       return this.page.getByRole('heading', {name : 'Dashboard'});

    }

    get errorMessage()
    {

    return this.page.getByText('Invalid credentials')
    }

    async login(username:string, password:string){

    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.LoginButton.click();
    await expect(this.dashboard).toBeVisible();
    
    }

     async invalidlogin(username:string, password:string){

    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.LoginButton.click();
    await expect(this.errorMessage).toBeVisible();
    
    }

}