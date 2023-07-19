const { baseUrl } = Cypress.env();
import { Login } from '../support/pages/login.Page.js'


describe('login scenarios', () => {
const loginPage = new Login();
let usersData;

  before('use fixture', () =>{
    cy.fixture('users').then(data => {
      usersData = data;
    });
  })

  beforeEach('', () => {
    cy.visit(baseUrl);
    loginPage.clickNavbarLogin();
  })

  it.only('Login passes', () => {
    // Check modal login exists
    cy.get(loginPage.loginModal)
    .should('have.class', 'modal')
    .and('have.class', 'fade')
    .and('have.class', 'show')

    cy.get('#loginusername').clear();

    loginPage.typeUser(usersData.valid.user)
    loginPage.typePass(usersData.valid.pass)
    loginPage.clickLogin()
  })

  it('Login fail for pass invalid', () => {
    loginPage.typeUser(usersData.valid.user)
    loginPage.typeUser(usersData.invalid.pass)
    loginPage.clickLogin()
  });

  it('Login fail for user invalid', () => {
    loginPage.typeUser(usersData.invalid.user)
    loginPage.typeUser(usersData.valid.pass)
    loginPage.clickLogin()
  });

  it('Login fail for user, and pass invalid', () => {
    loginPage.typeUser(usersData.invalid.user)
    loginPage.typeUser(usersData.invalid.pass)
    loginPage.clickLogin()
  });


  // Little table of decisions

  // condicions   | 1 | 2 | 3 | 4 |
  // login name   | V   V   F   F 
  // login pass   | V   F   v   F

  // other particions: V - F - Null - Empty


})