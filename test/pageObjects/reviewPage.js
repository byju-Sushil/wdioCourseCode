class ReviewPage{
    get productPrices(){
        return $$("//tr/td[4]/strong")
    }

    async sumOfProducts(){
        const totalSum = (await Promise.all((await this.productPrices.map(async (productPrice)=>parseInt((await productPrice.getText()).split(".")[1].trim()))))).reduce((acc,price)=>acc+price,0)
        return totalSum
    }
    async totalFormattedPrice(){
        const totalval = await $("h3 strong").getText()
        const totalamt = parseInt(totalval.split(".")[1].trim())
        return totalamt
    }
    get checkout(){
        return $(".btn-success")
    }
}

export default new ReviewPage()
