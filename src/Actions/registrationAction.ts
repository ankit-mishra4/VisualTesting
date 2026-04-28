import { Page, expect } from "@playwright/test";
import { registration } from "../page/registrationPage";

export class registrationAction {

  readonly page: Page;
  readonly RegistrationPage: registration;

  constructor(page: Page) {
    this.RegistrationPage = new registration(page);
    this.page = page;
  }

  async navigateToRegistration(url: string) {
    await this.page.goto(url);
  }

  async enterName(name: string) {
    await this.RegistrationPage.name.fill(name);
  }

  async selectCountry(country: string) {
    await this.RegistrationPage.Country.selectOption(country);
  }

  async selectAccountType(accountType: string) {
    await this.RegistrationPage.AccountType.selectOption(accountType);
  }

  async enterEmail(email: string) {
    await this.RegistrationPage.email.fill(email);
  }

  async enterPassword(password: string, confirmPassword: string) {
    await this.RegistrationPage.password.fill(password);
    await this.RegistrationPage.ConfirmPassoword.fill(confirmPassword);
  }

  async clickSingup() {
    await this.RegistrationPage.Signup.click({ force: true });
  }

 
  async verifyRegistrationSuccessful() {
    await expect(this.page.getByRole("heading", { name: "Registration Successful" })).toBeVisible();
  }

  async fillRegistrationForm(url: string, name: string, country: string, accountType: string, email: string, password: string, confirmPassword: string) {
    await this.enterName(name);
    await this.selectCountry(country);
    await this.selectAccountType(accountType);
    await this.enterEmail(email);
    await this.enterPassword(password, confirmPassword);
   // await this.clickSingup();
  }

}