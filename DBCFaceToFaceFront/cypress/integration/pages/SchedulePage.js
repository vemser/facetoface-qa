import BasePage from "./BasePage";
const basePage = new BasePage();

let tostify = ".Toastify__toast-body > :nth-child(2)"

let entrevistaTest = '#container-calendar-schedules > div > div > div.fc-view-harness.fc-view-harness-active > div > table > tbody > tr > td > div > div > div > table > tbody > tr:nth-child(5) > td.fc-daygrid-day.fc-day.fc-day-sat.fc-day-future > div > div.fc-daygrid-day-events > div:nth-child(1) > a'
let emailCandidato = '#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-lt6aye > div > p:nth-child(2)'
let cancelarBtn = '#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-lt6aye > div > div > button:nth-child(2)'
let emailtest = "pietro.bianchi@dbccompany.com.br"
export default class RegisterCandidatePage extends BasePage {
    clicarEntrevista(){
        basePage.click(entrevistaTest);
        basePage.validarText(emailCandidato, emailtest);
    }

    cancelarEntrevista(){
        basePage.click(cancelarBtn);
    }

    validarElemento(){
        basePage.validarVisibilidade(entrevistaTest);
    }

    validarElementoInexistente(){
        basePage.validateNotExist(entrevistaTest);
    }
}