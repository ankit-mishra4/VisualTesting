import { Page, expect } from "@playwright/test";
import { ParaRegistration } from "../page/parabankpage";
import { getUserData } from "../utility/utils/fakerUtil";

export class ParaAction {
    readonly parapage: ParaRegistration;
    readonly page: Page;

    constructor(page: Page) {
        this.parapage = new ParaRegistration(page);
        this.page = page;
    }

    // =============================
    //  FILL FORM
    // =========================
    async filldata() {

        const user = getUserData();

        await this.parapage.Password.fill(user.password);
        await this.parapage.Username.fill(user.username);
        await this.parapage.Confirm.fill(user.confirmPassword);
        await this.parapage.SSN.fill(user.ssn);
        await this.parapage.Phone.fill(user.phone);
        await this.parapage.ZipCode.fill(user.zipCode);
        await this.parapage.State.fill(user.state);
        await this.parapage.City.fill(user.city);
        await this.parapage.Address.fill(user.address);
        await this.parapage.LastName.fill(user.lastName);
        await this.parapage.FirstName.fill(user.firstName);
    }

    async Register() {
        return this.parapage.Register.click();
    }

    // =========================
    //  VISUAL TEST GROUP METHOD
    // =========================
    async verifyRegistrationPage() {

        await expect(this.parapage.FirstName).toHaveScreenshot("firstname.png");
        await expect(this.parapage.LastName).toHaveScreenshot("lastname.png");
        await expect(this.parapage.Username).toHaveScreenshot("username.png");
        await expect(this.parapage.Password).toHaveScreenshot("password.png");
        await expect(this.parapage.Confirm).toHaveScreenshot("confirm.png");
        await expect(this.parapage.SSN).toHaveScreenshot("ssn.png");
        await expect(this.parapage.Phone).toHaveScreenshot("phone.png");
        await expect(this.parapage.ZipCode).toHaveScreenshot("zipcode.png");
        await expect(this.parapage.State).toHaveScreenshot("state.png");
        await expect(this.parapage.City).toHaveScreenshot("city.png");
        await expect(this.parapage.Address).toHaveScreenshot("address.png");
        await expect(this.parapage.Address).toHaveScreenshot("done");
    }
}