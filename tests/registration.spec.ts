
import { test, expect } from "../src/fixture/LoginFixture";
import registration from "../src/testdata/registration.json";
import { faker } from "@faker-js/faker";

test("Registration", async ({ page, appAction }) => {

  const password = faker.internet.password();
  const registrationFakerData = {
    name: faker.person.fullName(),
    country: "India",
    accountType: "Engineer",
    email: faker.internet.email(),
    password: password,
    confirmPassword: password,
  };

  await appAction.registration.fillRegistrationForm(
    registration.baseUrlA,
    registrationFakerData.name,
    registrationFakerData.country,
    registrationFakerData.accountType,
    registrationFakerData.email,
    registrationFakerData.password,
    registrationFakerData.confirmPassword
  );

  await appAction.registration.clickSingup();
  await page.waitForLoadState("networkidle");
  await appAction.registration.verifyRegistrationSuccessful();
  await page.screenshot({ path: "screenshots/registration.png", fullPage: true });
  

});

test("Registration page elements should be visible", async ({ page, appAction }) => {

  await page.goto(registration.baseUrlA);
  await page.waitForLoadState("domcontentloaded");

  //  NAME
  const name = appAction.registration.RegistrationPage.name;
await name.waitFor({ state: 'visible' });
  await expect(name).toHaveScreenshot("name.png");

  //  COUNTRY
  const country = appAction.registration.RegistrationPage.Country;
await name.waitFor({ state: 'visible' });
  await expect(country).toHaveScreenshot("country.png");

  //  ACCOUNT TYPE
  const accountType = appAction.registration.RegistrationPage.AccountType;
await name.waitFor({ state: 'visible' });
  await expect(accountType).toHaveScreenshot("accountType.png");

  //  EMAIL
  const email = appAction.registration.RegistrationPage.email;
await name.waitFor({ state: 'visible' });
  await expect(email).toHaveScreenshot("email.png");

  //  PASSWORD
  const password = appAction.registration.RegistrationPage.password;
await name.waitFor({ state: 'visible' });
  await expect(password).toHaveScreenshot("password.png");

  //  CONFIRM PASSWORD
  const confirmPassword = appAction.registration.RegistrationPage.ConfirmPassoword;
  await name.waitFor({ state: 'visible' });
  await expect(confirmPassword).toHaveScreenshot("confirmPassword.png");

  //  SIGNUP BUTTON
  const signup = appAction.registration.RegistrationPage.Signup;
 await name.waitFor({ state: 'visible' });
  await expect(signup).toHaveScreenshot("signup.png");

});