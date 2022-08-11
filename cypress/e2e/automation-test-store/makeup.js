
import MakeupObject from './PageObject/makeUpObject';

describe('goes to makeup page and adds produicts to cart', function(){
    it('navigates to makeup page', ()=>{
        cy.visit('https://automationteststore.com/');
    })

    it('selects product and adds to cart',function (){

        const home = new HomeObject();
        const makeUp = new MakeupObject();
        const productDetails = new ProductDetailsObject();
        
        home.getMakeupbutton().click();

        makeUp.getOneProduct().click();


        addToCart(cy.fixture.color, cy.fixture.qty);

        addToCart(color, qty){
                productDetails.selectColor().select(color).should('have.value', '653')
                productDetails.getproductQuantity().clear().type(qty);
                productDetails.getAddToCartbutton().click()
                   }
    })

    it('validates cart total', function(){


    })
})