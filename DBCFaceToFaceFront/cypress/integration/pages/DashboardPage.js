import BasePage from "./BasePage";
const basePage = new BasePage();

let candidatosBtn = "#button-candidates-home"
let usuariosBtn = "#button-users-home"
let searchBar = "#input-search-home"
let trilhaFilterSelect = "#select-trilha"
let trilhaSelect = "#select-qa"
let edicaoFilterSelect = "#select-edicao"
let edicaoSelect = "#edicao-10"
let advanceBtn = "#change-page-home > ul > li:nth-last-child(1) > button"
let backButton = "#change-page-home > ul > li:nth-child(1) > button"
let searchBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-7fk3ng > div > div.MuiFormControl-root.MuiTextField-root.css-dlwbzx > div > div > button"
let resetSearch = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-7fk3ng > button"
let marcarEntrevistaCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > div.MuiBox-root.css-w56oqh > button"
let deleteCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > div.MuiBox-root.css-hjd0cx > button:nth-child(3)"
let editCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-lt6aye > div > div.MuiBox-root.css-17vkjbf > button:nth-child(3)"
let voltardetalheCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-lt6aye > div > div.MuiBox-root.css-17vkjbf > button:nth-child(1)"
let reviewCandidatoBtn = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > div.MuiBox-root.css-hjd0cx > button:nth-child(1)"
let campoNome = ".css-1m618co"
let campoEmail = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > p.MuiTypography-root.MuiTypography-body1.css-s2wgzw"
let campoTrilha = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1) > p.MuiTypography-root.MuiTypography-body1.css-6h9k0t"
let campoNota = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(2) > p.MuiTypography-root.MuiTypography-body1.css-ubvr7p"
let dashCandidate = "#button-candidates-home"
let dashUser = "#button-users-home"
let homeBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(1)"
let registerUserBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(2)"
let registerCandidateBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(3)"
let registerInterviewBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(4)"
let scheduleBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(5)"
let editPerfilBtn = ".MuiList-root > :nth-child(6)"
let logoutBtn = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-1rr4qq7 > nav > div:nth-child(7)"
let msgUserLogar = "#root > div > div.MuiDrawer-root.MuiDrawer-docked.css-1tu59u4 > div > div > div.MuiBox-root.css-16vpxei > p"
let tipoGestao = '#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-69vuws > form > div.MuiBox-root.css-1tjw18l > div:nth-child(2) > div:nth-child(3) > div > div > div > label:nth-child(1)'
let tipoInstrutor = '#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-69vuws > form > div.MuiBox-root.css-1tjw18l > div:nth-child(2) > div:nth-child(3) > div > div > div > label:nth-child(2)'
let tipoAdmin = '#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-69vuws > form > div.MuiBox-root.css-1tjw18l > div:nth-child(2) > div:nth-child(3) > div > div > div > label:nth-child(3)'

let testeElemento = '#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-uery8 > div.MuiBox-root.css-ufvb1 > div.MuiBox-root.css-1ofqig9 > div > div.MuiBox-root.css-1ofqig9 > div:nth-child(1)'

let testeurl = 'https://facetoface-front.vercel.app/update-my-profile'


let tostify = ".Toastify__toast-body > :nth-child(2)"

export default class DashboardPage extends BasePage {

    validarNomeUser(nome){
        basePage.validarText(msgUserLogar, `Olá, ${nome}`)
    }

    homePage(){
        basePage.click(homeBtn)
    }

    schedulePage(){
        basePage.click(scheduleBtn)
        basePage.tempo(3000)
    }

    registerUserPage(){
        basePage.click(registerUserBtn)
    }

    registerCandidatePage(){
        basePage.click(registerCandidateBtn)
    }

    registerInterviewPage(){
        basePage.click(registerInterviewBtn)
    }

    editPerfilUserPage(){
        basePage.click(editPerfilBtn)
        cy.url(testeurl)
        basePage.validarNotVisibilidade(tipoGestao)
        basePage.validarNotVisibilidade(tipoInstrutor)
        basePage.validarNotVisibilidade(tipoAdmin)
    }

    logout(){
        basePage.click(logoutBtn)
    }

    listaCandidatos(){
        basePage.click(candidatosBtn)
    }

    listaUsuarios(){
        basePage.click(usuariosBtn)
    }

    resetSearch(){
        basePage.click(resetSearch)
    }

    editCandidadoPorDetahes(){
        basePage.click(editCandidatoBtn)
    }

    voltarDetahes(){
        basePage.click(voltardetalheCandidatoBtn)
    }

    detalhesCandidato(nome){
        buscaCandidatoPorNome(nome)
        basePage.click(reviewCandidatoBtn)
    }

    marcarEntrevistaCandidato(){
        basePage.click(marcarEntrevistaCandidatoBtn)
    }

    buscaCandidatoPorNome(nome){
        basePage.preencherInputForce(searchBar, nome)
        basePage.clickForce(searchBtn)
        basePage.tempo(3000)
        basePage.validarText(campoNome, nome)
    }

    buscaCandidatoPorTilha(){
        basePage.click(trilhaFilterSelect)
        basePage.click(trilhaSelect)
    }

    buscaCandidatoPorEdicao(){
        basePage.click(edicaoFilterSelect)
        basePage.click(edicaoSelect)
    }

    
}