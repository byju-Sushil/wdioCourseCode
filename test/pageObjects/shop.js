class ShopPage{
    get checkout(){
        return $("*=Checkout")
    }
    get cards(){
        return $$("[class='card h-100']")
    }
    async addProductsToCart(products){
        for(let i=0;i<await this.cards.length;i++){
            const card =await this.cards[i].$("div h4 a")
            if(products.includes(await card.getText())){
                await this.cards[i].$("div button").click()
            }
        }
    }
}

// module.exports = LoginPage()
export default new ShopPage()