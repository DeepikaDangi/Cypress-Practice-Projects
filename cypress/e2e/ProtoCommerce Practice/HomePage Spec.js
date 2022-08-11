///<reference types = "Cypress"/>
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage';

//Page object assigned to variables
const homePage = new HomePage();
const productsPage = new ProductsPage();

before(function(){
    cy.fixture('example').then(function(data){
        this.data=data;
    })
})

describe('To test home page forms', function() {
    it('Fills web forms', function() {
        
        cy.visit(Cypress.env('url')+"/angularpractice/")
		homePage.getEditBox().type(this.data.name)
		homePage.getGender().select(this.data.gender); 

        //validation
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')//
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()
    })

    it('clicks on checkout', function(){
        
        this.data.productName.forEach(function(element){
            cy.selectProduct(element);
        });
        productsPage.getCheckoutButton().click()
        let sum = 0;

        //validates cart total with product prices
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            const actualtext = $el.text()
            let resultText = actualtext.split(' ')
            resultText = resultText[1].trim()

            sum = Number(sum)+Number(resultText)
                      
        }).then(function(){
            cy.log(sum)
        })    
        
        cy.get('h3 > strong').then(function(elem){
            let element = elem.text()
            element = element.split(' ')
            let totalCart = element[1].trim()
            totalCart = Number(totalCart)

            expect(sum).to.equal(totalCart)

        })

        productsPage.clickFinalCheckout().click()
    }) 
    
        it('types coutry name to get suggestions', function (){
        productsPage.typeCountry().type(this.data.country);
        productsPage.selectCountry().click();
        productsPage.checksAgreebox().check({force: true});
        productsPage.clicksPurchase().click()
    })   
})
