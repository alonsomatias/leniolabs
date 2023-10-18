const items = require('../../fixtures/items.json');

const inventoryItem = (itemName) => cy.get('.inventory_item_name ').contains(itemName).parentsUntil('.inventory_list').last()
const shoppingCartButton = () => cy.get('[id=shopping_cart_container]');
const inventoryItemName = (itemName) => cy.get('.inventory_item_name')
const checkoutButton = () => cy.get('[data-test=checkout]')

export function PageIsDisplayed() {
    cy.get('.app_logo').should('have.text', 'Swag Labs')
    items.forEach(item => {
        cy.log('Validate : ' + item.alt)
        inventoryItem(item.alt)
            .find('img[class=inventory_item_img]')
            .should('have.attr', 'src', item.src);
    });
}

export function AddToCart(itemsList){
    itemsList.forEach((itemToBuy) => {
        inventoryItem(itemToBuy)
        .find('button[data-test^=add-to-cart]')
        .click()
    })
}

export function GoToCart() {
    shoppingCartButton()
        .should('be.visible')
        .click();
}

export function Checkout(itemsToBuy){
    itemsToBuy.forEach((item) => {
        inventoryItemName(item)
            .should('be.visible')
    })
    checkoutButton()
        .should('be.visible')
        .click()
}