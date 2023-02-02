class LoginPage{
    get userName(){
        return $("#username")
    }
    get password(){
        return $("//input[@type='password']")
    }
    get textInfo(){
        return $("p")
    }
    get alert(){
        return $(".alert-danger")
    }
    get signIn(){
        return $("#signInBtn")
    }

    async Login(username,password){
        await this.userName.setValue(username)
        await this.password.setValue(password);
        await this.signIn.click();
    }
}

// module.exports = LoginPage()
export default new LoginPage()
