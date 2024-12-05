
const selectorsForm = require("../fixtures/selectorsForm.json");

Cypress.Commands.add("checkValidValues", (userName, email, message) => {
    cy.get(selectorsForm.userNameField).clear().type(userName);
    cy.get(selectorsForm.emailField).clear().type(email);
    cy.get(selectorsForm.messageField).clear().type(message); 
    
})