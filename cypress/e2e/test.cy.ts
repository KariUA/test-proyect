import { afterEach, beforeEach, describe } from "node:test";

describe('Login', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('http://localhost:8080/shopping-cart/login.jsp');

    });

    it('username', function () {
        cy.xpath('#las_').click().then(function () {            
            cy.wait(200)
            cy.get('div[class="validation-summary-errors"]').should('have.text', 'Login no tuvo exito. Por favor, corrija los errores e intentelo de nuevo.\nNo cuenta encontro\n');
        });
    });

    it('Contraseña requerida', function () {
        cy.get('input[name="Email"]').type('marlentrevi@gmail.com');
        cy.xpath('/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[5]/input').click().then(function () {            
            cy.wait(200)
            cy.get('div[class="validation-summary-errors"]').should('have.text', 'Login no tuvo exito. Por favor, corrija los errores e intentelo de nuevo.\nNo cuenta encontro\n');
        });
      });

      it('Login inválido', () => {
        cy.get('input[name="Email"]').type('marlentrevi@gmail.com');
        cy.get('[id^=Password]').type('12345');
        cy.xpath('/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[5]/input').click().then(function () {            
            cy.wait(200)
            cy.get('div[class="validation-summary-errors"]').should('have.text', 'Login no tuvo exito. Por favor, corrija los errores e intentelo de nuevo.\nNo cuenta encontro\n');
        });
    });




 afterEach(function () {
        cy.reload();

    });
});