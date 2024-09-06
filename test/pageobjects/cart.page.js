import { $, expect } from '@wdio/globals';
import Page from './page';

class CartPage extends Page {
    // Selectors
    get itemDescription() {
        return $('.inventory_item_name'); // Selector for item description
    }

    get removeButton() {
        return $('#remove-sauce-labs-backpack'); // Selector for the Remove button
    }

    get continueShoppingButton() {
        return $('#continue-shopping'); // Selector for the Continue Shopping button
    }

    get checkoutButton() {
        return $('#checkout'); // Selector for the Checkout button
    }

    // Function to open the cart page
    open() {
        return super.open('cart.html'); // Navigates to the cart page
    }

    // Function to validate item description
    async validateItemDescription() {
        await expect(this.itemDescription).toHaveText('Sauce Labs Backpack'); // Validates item name
    }

    // Function method to click button checkout
    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    // Function to validate buttons existence
    async validateButtons() {
        await expect(this.removeButton).toBeDisplayed(); // Validates Remove button is displayed
        await expect(this.continueShoppingButton).toBeDisplayed(); // Validates Continue Shopping button is displayed
        await expect(this.checkoutButton).toBeDisplayed(); // Validates Checkout button is displayed
    }
}

export default new CartPage();
