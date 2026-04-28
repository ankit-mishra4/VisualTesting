import { Page } from "@playwright/test";
import { loginPage } from "../page/loginPage";

export class loginAction {

  readonly LoginPage: loginPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.LoginPage = new loginPage(page);
  }

  async testMethod1(email: string, password: string) {
    await this.LoginPage.email.fill(email);
    await this.LoginPage.password.fill(password);
    await this.LoginPage.loginBtn.click();

    // optional safe wait
    await this.page.waitForLoadState("domcontentloaded");
  }
}