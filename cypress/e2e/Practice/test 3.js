/// <reference types = 'cypress' />
//automation practice webpage

describe('select and add 5 items to the cart', ()=>{
    it('visits the site and selects category', function(){
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').contains('Women').click();
        cy.get('.subcategory-image a[title="Dresses"]').click()
    })

    it('asserts 5 items in category', function(){
        cy.get('.ajax_block_product').should('have.length', '5')
    })
        
    it('matches and selects the item', function (){
        cy.get('.ajax_block_product').each(($el, index,$list)=>{
            const text = $el.find('.product-name').text()
            if(text.includes('Summer'))
            {
            cy.get('.ajax_block_product').eq(index).find('.ajax_add_to_cart_button').click({force:true}); 
            cy.wait(5000)
            cy.get('div#layer_cart').invoke('show').find('span.cross').click()   
            }
        })
        
    }) 
    
    // it('verifies cart and proceeds to checkout', function (){
    //     cy.get('div#layer_cart').invoke('show');
    //     cy.get('.layer_cart_cart').find('.btn.btn-default.button-medium[title="Proceed to checkout"]').click()

    // })
})

