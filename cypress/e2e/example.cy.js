// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.request('GET', 'https://v6.exchangerate-api.com/v6/90bb15c95d856edac661b43e/codes')
  })
})
