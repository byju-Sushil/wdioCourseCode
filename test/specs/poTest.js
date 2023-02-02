import loginPage from '../pageobjects/loginPage.js'
import shopPage from '../pageObjects/shop.js'
import reviewPage from '../pageObjects/reviewPage.js'
import placeOrder from '../pageObjects/placeOrder.js'
import fs from 'fs'
// const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let prods = JSON.parse(fs.readFileSync('test/testData/ShopTest.json'))

import { expect as expectchai } from 'chai'

// const loginPage = require('../pageObjects/loginPage')

describe('Ecommerce Application',async ()=>{      // test suite name,function
    credentials.forEach(({username,password})=>{
    it('Login Fail page',async()=>{
        // test case name,function
        
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        console.log(await browser.getTitle())

        await expect(browser).toHaveTitleContaining('Rahul Shetty')


        // Locators
        // Css selectors --- id= #id,class=.class , tagname[attribute='value]

        await loginPage.Login(username,password)
        await console.log(await loginPage.alert.getText())

        browser.waitUntil(async()=>{await loginPage.signIn.getAttribute('value')==='Sign In'},{
            timeout:5000,
            timeoutMsg:'Error msg is not showing up'
        })

        // await browser.pause(3000)

        await console.log(await loginPage.alert.getText())

        // await expect(await loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning")
    })
})

prods.forEach(({products})=>{
    it('End to End Test',async()=>{

        // const products = ['iphone X','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        await loginPage.Login("rahulshettyacademy","learning")

        await shopPage.checkout.waitForExist()     // partial text

        await shopPage.addProductsToCart(products)
        // await browser.pause(3000)
        await shopPage.checkout.click()
        
        // const productPrices = await reviewPage.productPrices

        const totalSum = await reviewPage.sumOfProducts()
        const totalamt = await reviewPage.totalFormattedPrice()
        expectchai(totalamt).to.equal(totalSum)

        await reviewPage.checkout.click()
        await browser.pause(2000)

        await placeOrder.place.setValue("ind")

        await placeOrder.dropDown.waitForExist({reverse:true})

        await placeOrder.India.click()

        await placeOrder.purchase.click()
        await browser.pause()
        // expect(browser).toHaveTextContaining("Success")
        expect(await placeOrder.success).toHaveTextContaining("Success")
    })
})
})
