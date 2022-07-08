class Phone {
    constructor (name, type, price, img) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.img = img;
    }
    getName(){
        return this.name;
    }

    getTpye(){
        return this.type;
    }

    getPrice(){
        return this.price;
    }

    getImg(){
        return this.img;
    }

    setName(name){
        this.name = name;
    }

    setType(type){
        this.type = type;
    }

    setPrice(price){
        this.price = price;
    }

    setImg(img){
        this.img = img;
    }

    editPhone(name, type, price, img){
        this.name = name;
        this.type = type;
        this.price = price;
        this.img = img;
    }

}