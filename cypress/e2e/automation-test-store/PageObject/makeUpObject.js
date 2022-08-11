class MakeupObject {
    getMakeupbutton () {
        return cy.get('.nav-pills > li:nth-child(3)')
    }

    getOneProduct (){
        return cy.get(':nth-child(2) > .thumbnail > .pricetag > .productcart > .fa')
    }

    selectColor (){
        return cy.get('#option318')
    }  
    
    getproductQuantity (){
        return cy.get('#product_quantity')
    }

    getAddToCartbutton(){
        return cy.get('.cart')
    }
    
    getSecondProduct(){
        return cy.get(':nth-child(3) > .thumbnail > .pricetag > .productcart > .fa')
    }
}
export default MakeupObject;