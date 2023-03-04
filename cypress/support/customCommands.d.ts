declare namespace Cypress {
    interface Chainable<Subject> {
        getPet(status: any): Chainable<any>;
        addNewPet(name: any, status: any): Chainable<any>;
        updatePet(petName: any, newStatus: any): Chainable<any>;
  }
}