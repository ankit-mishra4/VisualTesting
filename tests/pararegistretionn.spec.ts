
import { test, expect } from "../src/fixture/LoginFixture";


test("Parabank Registration with Faker Data", async ({ page, appAction }) => {

 
  
  await appAction.paraaction.filldata();

  //  Click Register
  await appAction.paraaction.Register();

  //  Verification (example)
  await expect(page).toHaveURL(/register|success|overview/);

  console.log("Registration completed successfully ");
   await page.screenshot({ path: "screenshots/registration.png", fullPage: true });


});
test("...verifyRegistrationPage", async ({ page, appAction }) => {

  await appAction.paraaction.verifyRegistrationPage();
});