class PlaceOrder{
    get place(){
        return $("#country")
    }
    get dropDown(){
        return $(".lds-ellipsis")
    }
    get purchase(){
        return $(".btn-success")
    }
    get India(){
        return $("=India")
    }
    get success(){
        return $(".alert-success")
    }
}

export default new PlaceOrder()
