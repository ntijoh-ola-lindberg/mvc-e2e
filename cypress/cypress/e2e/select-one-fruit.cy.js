describe("Testa om text finns på en frukt-sida", () => {
  it("ska innehålla 'Mer info om:'", () => {
    cy.visit('http://localhost:9292/')
    cy.get('ul.fruits a').first().click();
    cy.contains("Mer info om:").should("exist");
  });
});