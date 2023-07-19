export class Login {
    constructor(){
        this.loginInput = '#loginusername',
        this.passInput = '#loginpassword',
        this.loginBtn = 'button[type="button"]:contains("Log in")',
        this.navbarLoginBtn = '#login2',
        this.loginModal = '#logInModal'
    }

    clickNavbarLogin(){
        cy.get(this.navbarLoginBtn).click()
    }

    typeUser(username){
        cy.get(this.loginInput).type(username);
    }

    typePass(pass){
        cy.get(this.passInput).type(pass);
    }

    clickLogin(){
        cy.get(this.loginBtn).click();
    }
}