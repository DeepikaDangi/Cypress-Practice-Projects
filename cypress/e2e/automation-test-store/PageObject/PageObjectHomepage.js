class HomePage {



    getLoginName (){
        return cy.get('#loginFrm_loginname');
    }

    getPassword (){
        return cy.get('#loginFrm_password');
    }

    getLoginbutton (){
        return cy.get('button[title="Login"]');
    }

    addToCart(){


    }

    searchAProduct(){

        
    }


}
export default HomePage;