const selectorsForm = require("../fixtures/selectorsForm.json");
const validDataForm = require("../fixtures/validDataForm.json");
describe("Sending form", () => {
before(() => {
    cy.visit("https://kontaktnaya-forma.testograf.ru/"
      
       );
  });
  it("Sanding form", () => {
   cy.checkValidValues(validDataForm.userName, validDataForm.email, validDataForm.message);
    cy.get(selectorsForm.goalField).click();
    cy.get(selectorsForm.order).click();
    cy.get(selectorsForm.buttonSend).click();
    cy.contains("Благодарим за обращение").should("be.visible")
  })
})
       