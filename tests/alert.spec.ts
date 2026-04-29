
import { test, expect } from "../src/fixture/LoginFixture";
import alert from "../src/testdata/registration.json";
import { faker } from "@faker-js/faker";

test("Parabank ", async ({ page, appAction }) => {

 
  
  await appAction.alertA.fillAlert();


  
  await appAction.alertA.handleAlert();


 await appAction.alertA.clickSubmit();

 await appAction.alertA.verifySuccessMessage();

  console.log("Registration completed successfully ");
   await page.screenshot({ path: "screenshots/registration.png", fullPage: true });


});