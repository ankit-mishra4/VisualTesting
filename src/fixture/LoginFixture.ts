import { test as base, expect } from "@playwright/test";
import login from "../../src/testdata/login.json";
import registrationData from "../testdata/registration.json"; 
import { loginAction } from "../Actions/loginAction";
import { registrationAction } from "../Actions/registrationAction";
import { ParaAction } from "../Actions/ParaAction";

import paraData from "../testdata/paraBank.json"; 
import { alertAction } from "../Actions/AlertAction";
import alertData from "../testdata/alert.json";


type AppActions = {

  LoginA: loginAction;
  registration: registrationAction;
  paraaction: ParaAction;
  alertA: alertAction;
};

type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};

export const test = base.extend<Fixtures>({

  //  AUTO NAVIGATION FIXED
gotoBaseUrl: [
  async ({ page }, use) => {

    await page.goto(alertData.baseUrlAlert);
    await page.waitForLoadState('domcontentloaded');

    await use(); 

  },
  { auto: true },
],
  //  APP ACTION FIXED
  appAction: async ({ page }, use) => {

    const appAction: AppActions = {
   
      LoginA: new loginAction(page),
      registration: new registrationAction(page),
      paraaction: new ParaAction(page),
      alertA: new alertAction(page),
    };

    await use(appAction);
  },

});

export { expect } from "@playwright/test";