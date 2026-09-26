import {Page,Locator,expect} from '@playwright/test'





export class PIMPage{

    readonly page:Page;

constructor (page:Page){

    this.page=page;
}

    get PIMclick()
    
    {

        return this.page.getByRole('link', {name : 'PIM'});
    }

    get Add()

    {

        return this.page.getByRole('button', {name : ' Add'});
    }

     get firstname ()
     {
        

        return this.page.getByPlaceholder('First Name')
        

     }

     get middlename()
     {
        return this.page.getByPlaceholder('Middle Name')
        
     }

     get lastname()
     {
        return this.page.getByPlaceholder('Last Name')
     }

    async getEmployeeId(){

        const employeeId = this.page.locator('.oxd-input-group')
            .filter({has: this.page.locator('label', {hasText: 'Employee Id'})})
            .locator('.oxd-input.oxd-input--active');

         const employeevalue = await employeeId.inputValue();

         return employeevalue;
    }

    get save() 
    {

        return this.page.getByRole('button', {name : 'Save'});
    }

    async PIM (firstname:string,middlename:string,lastname:string)
    {
        await this.PIMclick.click();
        await this.Add.click();
        await this.firstname.fill(firstname);
        await this.middlename.fill(middlename);
        await this.lastname.fill(lastname);
        await console.log(this.getEmployeeId);
        await this.save.click();
    }


    


}
