import { expect as expectchai } from 'chai'

describe('UI Controls Test suite',async ()=>{      // test suite name,function

    it('UI Controls',async ()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        await $("#username").setValue("rahulshettyacademy")

        await $("//input[@type='password']").setValue("learning")

        // const radioButtons = await $$(".radiotextsty")

        const radioButtons = await $$(".customradio")


        const userDropdown = radioButtons[1]

        // await userDropdown.click()

        await userDropdown.$("span").click()

        const modal =await $(".modal-body")

        await modal.waitForDisplayed()

        await $("#cancelBtn").click()

        await $$(".customradio")[0].$("span").isSelected()

        await $$(".customradio")[1].$("span").click()

        await modal.waitForDisplayed()

        await $("#okayBtn").click()

        await $$(".customradio")[1].$("span").isSelected()

        await $$(".customradio")[0].$("span").click()

        await expect(modal).not.toBeDisplayed()

        const dropdown = await $("select.form-control")

        await dropdown.selectByAttribute('value','teach')
        await dropdown.selectByVisibleText("Consultant")
        await dropdown.selectByIndex(0)

        console.log(await dropdown.getValue())

        expectchai(await dropdown.getValue()).to.equal("stud")

    })

    it('Dynamic Dropdown Controls',async ()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")

        await $("#autocomplete").setValue("ind")
        await browser.pause(2000)

        let items = await $$("[class='ui-menu-item'] div")

        for(var i=0;i<await items.length;i++){
            // console.log(await items[i].getText())
            if(await items[i].getText()==="India"){
                await items[i].click()
                break
            }
        }
        

    })

    it('Checkbox Identification Smoke',async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")

        let checkboxes = await $$("input[type='checkbox']")
        await checkboxes[1].click();
        await $(checkboxes[1]).isSelected()
        await browser.saveScreenshot("ss.png")
    })
}



)