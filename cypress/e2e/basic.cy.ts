describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('Hello! I'm Jewon', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('Clicks');
  })
})
