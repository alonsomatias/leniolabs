var itParam = require('mocha-param');
import users from '../fixtures/users.json'

const itemsToBuy = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']

const LoginPage = require('../support/pom/loginPage.js');
const HomePage = require('../support/pom/homePage.js');
const FormPage = require('../support/pom/formPage.js');

describe('Buy Testing', () => {

  beforeEach(() => {
    cy.visit('/');
  })
  
  itParam('Buy using ${value.username}' , users, (userData) => {
    LoginPage.Login(userData.username, "secret_sauce");
    HomePage.PageIsDisplayed();
    HomePage.AddToCart(itemsToBuy)
    HomePage.GoToCart()
    HomePage.Checkout(itemsToBuy)

    cy.fixture('formData').then((userJson) => {
      FormPage.FillForm(userJson)
    })
  })
})
