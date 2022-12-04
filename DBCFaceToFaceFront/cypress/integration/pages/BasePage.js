/// <reference types="cypress" />

export default class BasePage {
 
    click(elemet){ 
       cy.get(elemet).click() 
    }
  
    clickForce(elemet){ 
       cy.get(elemet).click({force:true}) 
    }
  
    preencherInput(element, text){ 
      cy.get(element).type(text)
    }
  
    preencherInputComTeclaNoFinal(element, text, tecla){
       cy.get(element).type(text).type(tecla);
    }
  
    preencherInputForce(element, text){ 
       cy.get(element).type(text, {force:true})
    }
    
    tempo(tempo){ 
       cy.wait(tempo) 
    }
  
    select(element, value){ 
       cy.get(element).select(value)
    }
  
    validarText(element, text){ 
       cy.get(element).should('contain', text) 
    }
  
    validarQuantItemNaLista(element, quant){
       cy.get(element).should('have.length', quant)
    }

    limparCampo(element){
      cy.get(element).clear();
    }

    validateRedirecionarPagina(urlExpected) {
        cy.url().should("contain", urlExpected);
    }
    
    validateNotExist(element) {
        cy.get(element).should('not.exist');
    }
    
    validateIsDisabled(element) {
        cy.get(element).should("be.disabled");
    }
    
    haveAttributeDisabled(element) {
        cy.get(element).should("have.attr", "disabled");
    }

    validarVisibilidade(element) {
      cy.get(element).scrollIntoView().should('be.visible') 
    }

    validarNotVisibilidade(element) {
      cy.get(element).should('not.be.enabled') 
    }
  }
  