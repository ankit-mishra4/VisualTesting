import login from "../src/testdata/login.json";
import { test, expect } from "../src/fixture/LoginFixture";

test("Login + Visual testing", async ({ page, appAction }) => {

  //  LOGIN
  await appAction.LoginA.testMethod1(
    login.validUser.email,
    login.validUser.password
  );

  //  IMPORTANT: wait for navigation/page load
  await page.waitForLoadState("networkidle");

  //  URL CHECK (login success confirm)
  await expect(page).toHaveURL(/ecommerce(?!\/login)/);

  //  login page elements ab check mat karo (removed)

  //  Instead check post-login UI (example)
  await page.screenshot({ path: "screenshots/home.png", fullPage: true });

});
 

test("Login page elements should be visible", async ({ page, appAction  }) => {
 
   const email = appAction.LoginA.LoginPage.email;
  await expect(email).toBeVisible();
  await expect(email).toHaveScreenshot('email.png');

  //  PASSWORD CHECK + SCREENSHOT
  const password = appAction.LoginA.LoginPage.password;
  await expect(password).toBeVisible();
  await expect(password).toHaveScreenshot('password.png');

  //  LOGIN BUTTON CHECK + SCREENSHOT
  const loginBtn = appAction.LoginA.LoginPage.loginBtn;
  await expect(loginBtn).toBeVisible();
  await expect(loginBtn).toHaveScreenshot('login-button.png');
});
