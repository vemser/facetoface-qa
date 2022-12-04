import BasePage from "./BasePage";
const basePage = new BasePage();

let nome = "#input-name-register-candidate"
let email = "#input-email-register-candidate"
let cidade = "#input-city-register-candidate"
let estado = "#input-state-register-candidate"
let genero = "#genre-masculino-register-candidato"
let cv = "#input-cv-register-candidate"
let edicao = "#select-edition"
let turma = "#qa-register-candidate"
let enviarBtn = "#button-submit-register-candidate"
let observacao = "#input-observation-register-candidate"
let linguagem = "#input-languages-register-candidate"
let addLinguagem = "#form-register-candidate > div:nth-child(3) > div:nth-child(4) > div > div > div > button"
let msgNome = "#error-name-register-candidate"
let msgEmail = "#error-email-register-candidate"
let msgCidade = "#erros-city-register-candidate"
let msgEstado = "#error-state-register-candidate"
let msgGenero = "#error-genre-register-candidate"
let msgTurma = "#error-class-register-candidate"
let msgEdicao = "#error-edition-register-candidate"
let msgCurriculo = "#error-cv-register-candidate"
let tostify = ".Toastify__toast-body > :nth-child(2)"
let nomeCandidato = "Marta Golpista"
let emailCandidato = "pietro.bianchi@dbccompany.com.br"
let cidadeCandidato = "Belo Horizonte"
let estadoCandidato = "MG"
let value = "#edicao-10"




export default class RegisterCandidatePage extends BasePage {
    criarCandidatoCorretamente(){
        const fileName = 'readpdf.pdf';
        cy.fixture(fileName).then(fileContent => {
            cy.get(cv).attachFile({ fileContent, fileName, mimeType: 'application/pdf' }, { subjectType: 'input' });
        });
        basePage.preencherInput(nome, nomeCandidato)
        basePage.preencherInput(email, emailCandidato)
        basePage.preencherInput(cidade, cidadeCandidato)
        basePage.preencherInput(estado, estadoCandidato)
        basePage.preencherInput(linguagem, 'JAVA')
        basePage.click(addLinguagem)
        basePage.click(edicao)
        basePage.click(value)
        basePage.click(genero)
        basePage.click(turma)
        basePage.preencherInput(observacao, 'OBS TESTE')
        basePage.click(enviarBtn)
        basePage.validarText(tostify, "Candidato cadastrado com sucesso!")
    }

    criarCandidatoCamposObrigatorios(){
        const fileName = 'readpdf.pdf';
        cy.fixture(fileName).then(fileContent => {
            cy.get(cv).attachFile({ fileContent, fileName, mimeType: 'application/pdf' }, { subjectType: 'input' });
        });
        basePage.preencherInput(nome, nomeCandidato)
        basePage.preencherInput(email, emailCandidato)
        basePage.preencherInput(cidade, cidadeCandidato)
        basePage.preencherInput(estado, estadoCandidato)
        basePage.click(edicao)
        basePage.click(value)
        basePage.click(genero)
        basePage.click(turma)
        basePage.click(enviarBtn)
        basePage.validarText(tostify, "Candidato cadastrado com sucesso!")
    }

    criarCandidatoCamposNaoObrigatorios(){
        basePage.preencherInput(linguagem, 'JAVA')
        basePage.click(addLinguagem)
        basePage.preencherInput(observacao, 'OBS TESTE')
        basePage.click(enviarBtn)
        basePage.validarText(msgNome, "Nome completo é obrigatório!")
        basePage.validarText(msgEmail, "E-mail é obrigatório!")
        basePage.validarText(msgCidade, "Cidade é obrigatório!")
        basePage.validarText(msgEstado, "Estado é obrigatório!")
        basePage.validarText(msgGenero, "Gênero é obrigatório!")
        basePage.validarText(msgTurma, "Trilha é obrigatória!")
        basePage.validarText(msgEdicao, "Edição é obrigatória!")
        basePage.validarText(msgCurriculo, "CV é obrigatório!")
    }

    criarCandidatoSemPreencherCampos(){
        basePage.click(enviarBtn)
        basePage.validarText(msgNome, "Nome completo é obrigatório!")
        basePage.validarText(msgEmail, "E-mail é obrigatório!")
        basePage.validarText(msgCidade, "Cidade é obrigatório!")
        basePage.validarText(msgEstado, "Estado é obrigatório!")
        basePage.validarText(msgGenero, "Gênero é obrigatório!")
        basePage.validarText(msgTurma, "Trilha é obrigatória!")
        basePage.validarText(msgEdicao, "Edição é obrigatória!")
        basePage.validarText(msgCurriculo, "CV é obrigatório!")
    }
}