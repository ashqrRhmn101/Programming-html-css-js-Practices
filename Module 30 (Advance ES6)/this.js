class Vehicle{
    constructor(type, brand, price){
        this.type = type;
        this.brand = brand;
        this.price = price;
    }

    getThis(){
        console.log(this)
    }

    getPrice(){
        return this.price;
    }
}

const car1 = new Vehicle('Car', 'Honda', 500000)
const car2 = new Vehicle('Car', 'toyota', 600000)
car1.getThis();
car2.getPrice();