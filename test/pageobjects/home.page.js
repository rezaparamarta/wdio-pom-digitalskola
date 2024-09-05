import Page from './page';
import { $, expect } from '@wdio/globals';

class HomePage extends Page {
    get cartIcon() {
        return $('#shopping_cart_container');
    }

    get productImage() {
        return $('#item_4_img_link');
    }

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    // Function to open the homepage
    open() {
        return super.open('inventory.html'); // Navigates to the inventory page
    }

    // Function to click "Add to Cart" button
    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    // Validate the item is added to the cart
    async validateItemInCart() {
        await expect(this.cartIcon).toBeDisplayed(); // Check if the cart icon is visible
    }

    // Assertion Expectation to validate elements on the home page
    async validateOnHomePage() {
        await expect(this.cartIcon).toBeExisting(); // Check if cart icon exists
        await expect(this.productImage).toBeExisting(); // Check if product image exists
        await expect(this.addToCartButton).toHaveText('Add to cart'); // Check if button text changes to "Remove"
        await browser.pause(2000); // Pause for visual verification
    }
}

export default new HomePage();
