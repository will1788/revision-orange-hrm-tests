describe('OrangeHRM Tests', () => {

  const selectorList = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    submitButton: '[type="submit"]',
    alertContent: '.oxd-alert-content'
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).type('Admin')
    cy.get(selectorList.passwordInput).type('admin123')
    cy.get(selectorList.submitButton).click()
    cy.url().should('include', '/dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).type('Admin')
    cy.get(selectorList.passwordInput).type('wrongpassword')
    cy.get(selectorList.submitButton).click()
    cy.get(selectorList.alertContent)
  })
})