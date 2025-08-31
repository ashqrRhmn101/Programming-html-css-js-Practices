class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    getAge(){
        console.log(`${this.age} Years`);
    }
}

// // // //

class Dog extends Animal{
    constructor(name, bread, age){
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.breed = bread;
    }

    bark(){
        console.log(`${this.breed} is barking`);
    }

    // getAge(){
    //     console.log(`${this.age} Years`);
    // }
}

const dog1 = new Dog('Tomi','Deshi', 7)
const dog2 = new Dog('Momi','Beshi', 10)
dog1.eat()
dog1.bark()
dog2.getAge()     