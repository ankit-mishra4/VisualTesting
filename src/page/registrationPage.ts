import { Page, Locator } from "@playwright/test";   


export class registration{
readonly page: Page;

readonly name: Locator;
readonly Country: Locator;
readonly AccountType: Locator;
readonly email: Locator;
readonly password: Locator;
readonly ConfirmPassoword: Locator;
readonly Signup: Locator;

constructor(page:Page){

    this.page = page;

    this.name = page.getByRole("textbox",{name: 'Name*'});
    this.Country = page.getByRole('combobox', {name: 'Select Country*'});
    this.AccountType = page.getByRole('combobox', {name: 'Account Type*'});
    this.email = page.getByRole('textbox', { name: 'Email*' });
this.password = page.getByRole("textbox", { name: "Password*", exact: true });    this.ConfirmPassoword =page.getByRole('textbox', { name: 'Confirm Password*' });
    this.Signup =page.getByRole('button', { name: 'SIGNUP' });






  }
}
