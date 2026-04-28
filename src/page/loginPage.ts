import { Page, Locator } from '@playwright/test';

export class loginPage {
  readonly page: Page;

  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'LOGIN' });
  }
}
