import Page from './page';

class CheckoutPage extends Page{

    get cartIcon() {
        return $('.shopping_cart_badge');
    };

    get itemDescription() {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]');
    };
    
    get checkButton() {
        return $('#checkout');
    };
    get continueShoppingButton() {
        return $('#continue-shopping');
    };


        async validateOnCartPage() {
        await expect(this.cartIcon).toContainText('1');
        await expect(this.itemDescription).toContainText('Sauce Labs Backpack');
        await expect(this.checkButton).toBeExisting();
        await expect(this.continueShoppingButton).toBeExisting();
        
    }

    open() {
        return super.open('cart.html');
    };
};

export default new CheckoutPage();