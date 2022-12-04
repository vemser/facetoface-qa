const baseUrl = 'http://vemser-dbc.dbccompany.com.br:39000/vemser/facetoface-back/'

export default class Metodos {
    Login(){
        return cy.request({
            method: 'POST',
            url:`${baseUrl}/auth/fazer-login`,
            failOnStatusCode: false,
            body: {
                "email": 'julio.gabriel@dbccompany.com.br',
                "senha": '123'
            },
        }).as('response').get('@response')
    }
    
    GETcandidatoEmailRequest(email, token){
        return cy.request({
            method: 'GET',
            url:`${baseUrl}/candidato/findbyemails/${email}`,
            failOnStatusCode: false,
            headers:{
                authorization: token
            }
        }).as('response').get('@response')
    }
   
    DELETEfisicoCandidatoRequest(idCandidato, token){
        return cy.request({
            method: 'DELETE',
            url:`${baseUrl}/candidato/delete-fisico/${idCandidato}`,
            headers:{
                authorization: token
            },
            failOnStatusCode: false
        }).as('response').get('@response')
    }
    
    GETusuarioEmailRequest(email, token){
        return cy.request({
            method: 'GET',
            url:`${baseUrl}/usuario/email`,
            failOnStatusCode: false,
            headers:{
                authorization: token
            },
            qs: {
                "email":`${email}`
            }
        }).as('response').get('@response')
    }

    DELETEfisicoUsuarioRequest(idUsuario, token){
        return cy.request({
            method: 'DELETE',
            url:`${baseUrl}/usuario/delete-fisico/${idUsuario}`,
            headers:{
                authorization: token
            },
            failOnStatusCode: false
        }).as('response').get('@response')
    }

    GETentrevistaEmailRequest(email, token){
        return cy.request({
            method: 'GET',
            url:`${baseUrl}/entrevista/buscar-entrevista-email-candidato/${email}`,
            failOnStatusCode: false,
            headers:{
                authorization: token
            }
        }).as('response').get('@response')
    }

    DELETEfisicoEntrevistaRequest(idCandidato, token){
        return cy.request({
            method: 'DELETE',
            url:`${baseUrl}/entrevista/deletar-entrevista-email-candidato/${idCandidato}`,
            headers:{
                authorization: token
            },
            failOnStatusCode: false
        }).as('response').get('@response')
    }

    DELETEfisicoCurriculoRequest(idCandidato, token){
        return cy.request({
            method: 'DELETE',
            url:`${baseUrl}/curriculo/delete-fisico/${idCandidato}`,
            headers:{
                authorization: token
            },
            failOnStatusCode: false
        }).as('response').get('@response')
    }
}