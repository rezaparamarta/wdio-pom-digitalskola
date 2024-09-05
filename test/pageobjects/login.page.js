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

    open() {
        return super.open('');
    };
}

export default new LoginPage();

