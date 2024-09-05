import Page from './page';
import { $, expect } from '@wdio/globals';

class cartPage extends Page{


    // Set Attribute
    get cartItems() {
        return $('');
    };

    get continueShoppingButton() {
        return $('');
    };

    get checkOutButton() {
        return $('');
    };


    // Function Method

    
    async validateOnCartPage() {
        await expect(this.checkOutButton).toBeExisting();
        await expect(this.continueShoppingButton).toBeExisting();
    }   


    
    open() {
        return super.open('cart.html');
    };
};

export default new cartPage();