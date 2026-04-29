import { Page, expect } from "@playwright/test";
import { alert } from "../page/alertPage";
import { getalertData } from "../utility/AlertFaker";

export class alertAction {
  readonly page: Page;
  readonly AlertPage: alert;

  constructor(page: Page) {
    this.page = page;
    this.AlertPage = new alert(page);
  }

  //  form fill
  async fillAlert() {
    const user1 = getalertData();

    await this.AlertPage.enterName.fill(user1.Entername);
    await this.AlertPage.enterEmail.fill(user1.Enteremail);
    await this.AlertPage.enterSubject.fill(user1.Entersubject);
  }

  //  alert handle (separate method)
  async handleAlert() {
    this.page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });
  }

  //  click method (separate)
  async clickSubmit() {
    await this.AlertPage.submitbtn.click();
  }
async verifySuccessMessage() {
 await expect(
  this.page.getByText('Success! Your details have been submitted successfully.').first()
).toBeVisible({ timeout: 10000 });
}

}