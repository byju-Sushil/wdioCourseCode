import { expect as expectchai } from 'chai'

describe('Functional Testing on Application',async()=>{

    xit('Scrolling and Mouse hover',async()=>{
        await browser.maximizeWindow()
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")

        await $("#mousehover").scrollIntoView(false)
        // await browser.pause(2000)
        await $("#mousehover").moveTo()
        // await browser.pause(2000)

        await $("=Top").click()
        await browser.pause(2000)

        await browser.url('https://only-testing-blog.blogspot.com/2014/09/selectable.html')

        await $("button").doubleClick()
        // await browser.isAlertOpen()

        expectchai(await browser.isAlertOpen()).to.be.true

        expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")

        await browser.acceptAlert()

        await browser.pause(3000)
    })

    it('Web table validation',async()=>{
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        await $("tr th:nth-child(1)").click()

        const veggiesLocators =await $$("tr td:nth-child(1)")

        const veggiesNames =veggiesLocators.map(async veggie =>await veggie.getText())

        console.log(veggiesNames)

        var sortedveggies = veggiesNames.sort()

        console.log(sortedveggies)

        expectchai(veggiesNames).to.equal(sortedveggies)
    })

    it('Web table filter validation',async()=>{
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        await $("input[type='search']").setValue("tomato")

        const veggiesLocators =await $$("tr td:nth-child(1)")

        await expect(veggiesLocators).toBeElementsArrayOfSize({eq:1})

        expect(veggiesLocators[0]).toHaveTextContaining("Tomato")
        await browser.pause()
    })
})