import loginPage from "../pageobjects/login.page";
import homePage from "../pageobjects/home.page";
import cartPage from "../pageobjects/cart.page";
import { expect } from '@wdio/globals';

describe('Login Test', () => {
    it('Test 1 - Login with standard_user credentials', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await homePage.validateOnHomePage();
    });

    it('Test 2 - Add an Item to Cart', async () => {
        await homePage.open(); // Open the homepage
        await homePage.clickAddToCartButton(); // Click the Add to Cart button
        await homePage.validateItemInCart(); // Validate the item is in the cart
    });
    
});