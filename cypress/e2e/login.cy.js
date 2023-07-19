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

  it('Login passes', () => {
    cy.get(loginPage.loginModal).should('be.visible', { timeout: 7000 })
   
    loginPage.clearLoginUsername()

    loginPage.typeUser(usersData.valid.user)
    loginPage.typePass(usersData.valid.pass)
    loginPage.clickLogin()

    cy.get(loginPage.loginModal).should('not.be.visible', { timeout: 7000 })
    cy.get(loginPage.nameUser).contains('Welcome')
  })

  it('Login fail for pass invalid', () => {
    cy.get(loginPage.loginModal).should('be.visible', { timeout: 7000 })
   
    loginPage.clearLoginUsername()

    loginPage.typeUser(usersData.valid.user)
    loginPage.typePass(usersData.invalid.pass)
    loginPage.clickLogin()

    cy.on('window:alert', (t) => {
      expect(t).to.contains('Wrong password.');
    })
  });

  it('Login fail for user invalid', () => {
    cy.get(loginPage.loginModal).should('be.visible', { timeout: 7000 })
   
    loginPage.clearLoginUsername()

    loginPage.typeUser(usersData.invalid.user)
    loginPage.typePass(usersData.valid.pass)
    loginPage.clickLogin()

    cy.on('window:alert', (t) => {
      expect(t).to.contains('User does not exist.');
    })
  });

  it.only('Login fail for user, and pass invalid', () => {
    cy.get(loginPage.loginModal).should('be.visible', { timeout: 7000 })
   
    loginPage.clearLoginUsername()

    loginPage.typeUser(usersData.invalid.user)
    loginPage.typePass(usersData.invalid.pass)
    loginPage.clickLogin()

    cy.on('window:alert', (t) => {
      expect(t).to.contains('User does not exist.');
    })
  });


  // Little table of decisions

  // condicions   | 1 | 2 | 3 | 4 |
  // login name   | V   V   F   F 
  // login pass   | V   F   v   F

  // other particions: V - F - Null - Empty


})