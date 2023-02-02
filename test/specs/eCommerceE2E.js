import { expect as expectchai } from 'chai'


describe('Ecommerce Application Smoke',async()=>{
    it('End to End Test',async()=>{

        const products = ['iphone X','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        await $("#username").setValue("rahulshettyacademy")

        await $("//input[@type='password']").setValue("learning")

        await $("#signInBtn").click();

        // await $(".btn-primary").waitForExist()

        await $("*=Checkout").waitForExist()     // partial text

        const cards = await $$("[class='card h-100']")

        for(let i=0;i<cards.length;i++){
            const card =await cards[i].$("div h4 a")
            // console.log(await card.getText())
            if(products.includes(await card.getText())){
                // console.log(await card.getText())
                await cards[i].$("div button").click()
                console.log(await $("*=Checkout").getText())
            }
        }
        
        await $("*=Checkout").click()
        
        const productPrices = await $$("//tr/td[4]/strong")

        const totalSum = (await Promise.all((await productPrices.map(async (productPrice)=>parseInt((await productPrice.getText()).split(".")[1].trim()))))).reduce((acc,price)=>acc+price,0)

        console.log(totalSum)
        const totalval = await $("h3 strong").getText()
        const totalamt = parseInt(totalval.split(".")[1].trim())

        expectchai(totalamt).to.equal(totalSum)

        await $(".btn-success").click()
        await browser.pause(2000)

        await $("#country").setValue("ind")

        await $(".lds-ellipsis").waitForExist({reverse:true})

        await $("=India").click()

        await $(".btn-success").click()
        await browser.pause()
        // expect(browser).toHaveTextContaining("Success")
        expect($(".alert-success")).toHaveTextContaining("Success")
    })
})