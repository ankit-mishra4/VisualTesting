import { Locator,Page } from "@playwright/test";

export class alert{
readonly page: Page;
readonly enterName: Locator;
readonly enterEmail: Locator;
readonly enterSubject: Locator;
readonly submitbtn: Locator;


constructor(page: Page){

    this.page=page;
    this.enterName = page.getByRole("textbox",{name:"Name"});
this.enterEmail = this.page.getByRole('textbox', { name: 'Email' }).first();    this.enterSubject=page.getByRole('textbox', { name: 'Subject' });
    this.submitbtn = page.getByRole('button', { name: 'Submit' });

}



}
