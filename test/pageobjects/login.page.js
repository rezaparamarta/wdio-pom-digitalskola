import Page from './page';
import {$} from '@wdio/globals';

class LoginPage extends Page {
    // Set Atrribute 
    get usernameTextbox() {
        return $('#user-name');
    }

    get passwordTextbox() {
        return $('#password');
    }

    get loginButton() { // Ubah nama dari 'click' menjadi 'loginButton'
        return $('//input[@type="submit"]');
    }

    // get errorMessage() {
    //     return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
    // }

    // Class Methodnya
    async inputUsername(username) {
        await this.usernameTextbox.setValue(username);
    }

    async inputPassword(password) {
        await this.passwordTextbox.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click(); // Memanggil loginButton yang baru diubah
    }

    async login(username, password) {
        await $('#user-name').waitForExist({ timeout: 5000 });
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }
    

    // async validateWrongPasswordDisplayed() {
    //     await expect(this.errorMessage).toHaveText(
    //         expect.stringContaining('Epic sadface: Username and password do not match any user in this service')
    //     );
    // }

    open() {
        return super.open('');
    };
}

export default new LoginPage();

