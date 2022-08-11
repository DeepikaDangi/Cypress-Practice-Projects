
 
describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");
    

    cy.document().should('have.property', 'title').and('eq', 'ToolsQA')

		cy.title().should('eq', 'ToolsQA')

    // cy.viewport('iphone-8', 'portrait');

  })

    it('Captures cookies', function(){
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')

      cy.getCookie('__gads');
    })

    it('finds shadow root', function(){
      cy.visit('https://books-pwakit.appspot.com/')
      cy.get('book-app').shadow().find('app-toolbar input#input');
      
    })

    it.only('retries', 
    {
      retries:{
      runMode: 2,
      openMode: 1,
      }
    }, 
      function(){
      expect (1).to.eq(2);
    })
})