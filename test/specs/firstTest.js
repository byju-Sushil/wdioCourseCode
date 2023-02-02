describe('Ecommerce Application',async ()=>{      // test suite name,function

    it('Login Fail page Smoke',async()=>{
        // test case name,function
        
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())

        await expect(browser).toHaveTitleContaining('Rahul Shetty')


        // Locators
        // Css selectors --- id= #id,class=.class , tagname[attribute='value]

        // await $("input[name='username']").setValue("FirstTry")
        await $("#username").setValue("rahulshettyacademy")

        await $("//input[@type='password']").setValue("learning")

        await $("#signInBtn").click();

        browser.waitUntil(async()=>{await $("#signInBtn").getAttribute('value')==='Sign In'},{
            timeout:5000,
            timeoutMsg:'Error msg is not showing up'
        })

        // await browser.pause(3000)

        await console.log(await $(".alert-danger").getText())


        // await expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning")
    })

    it('Login Success Page title',async ()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        await $("#username").setValue("rahulshettyacademy")

        await $("//input[@type='password']").setValue("learning")

        await $("#signInBtn").click();

        await $(".btn-primary").waitForExist()

        await expect(browser).toHaveUrlContaining("shop")

        await expect(browser).toHaveTitle("ProtoCommerce")

    })
}



)