import homePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";
import cartPage from "../pageobjects/cart.page";
//import { expect } from '@wdio/globals';

describe('Login Test', () => {
    it('Test 1 - Login with standard_user credentials', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await homePage.validateOnHomePage();
    });

    it('Test 2 - Screen on Home Page', async () => {
        // Menunggu shopping cart muncul
        await $('#shopping_cart_container').waitForExist({ timeout: 2000 });
        
        // Menunggu item image muncul
        await $('#item_4_img_link').waitForExist({ timeout: 2000 });
    
        // Tambahkan interaksi selanjutnya setelah elemen-elemen tersebut muncul
        await $('#add-to-cart-sauce-labs-backpack');
    });

    it('Test 3 - Add to cart Sauce Labs Backpack item', async () => {
        await $('#remove-sauce-labs-backpack').click();
    });

    it('Test 4 - Sauce Labs Backpack item added to cart', async () => {
        // Menemukan elemen badge yang menunjukkan jumlah item di keranjang
        await $('//*[@id="shopping_cart_container"]/a/span');
    });

    it('Test 5 - Validate on Cart Page', async () => {
        await cartPage.validateOnCartPage();
    });

    
});