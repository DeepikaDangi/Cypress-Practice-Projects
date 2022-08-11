class ValidateCart {

    validateColourName (){
        return cy.get('tbody > :nth-child(2) > :nth-child(2) > div >small');
    }

    validateQuantity(){
        return cy.get('tbody > :nth-child(2) > :nth-child(5) > div > input');
    }

    // validateTotal (){
    //     return cy.get('tbody > :nth-child(2) > :nth-child(5) > div > input')
    // }
}
export default ValidateCart;