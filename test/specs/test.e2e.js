const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })
})


const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await browser.url(`http://localhost:3000/#/login`)
        await $('input[name="email"]').setValue('admin@test.com')
        await $('input[name="password"]').setValue('password123')
        await $('button').click()

        const element = await $('.card-title')
        await expect(element).toHaveText('Projects')
    })

})

