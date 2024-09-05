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
        await homePage.clickAddToCartButton();
        await homePage.validateItemInCart();
    });

    it('Test 3 - Validate the item description, Remove, Continue Shopping, and Checkout buttons', async () => {
        // Open the cart page
        await cartPage.open();
        await cartPage.validateItemDescription();
        await cartPage.validateButtons();
        await browser.pause(2000);
    });
});