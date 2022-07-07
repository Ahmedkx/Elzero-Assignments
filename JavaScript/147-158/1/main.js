class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        console.log("Car Is Running Now")
    }
    stop(){
        console.log("Car Is Stopped")
    }
}

let car1 = new Car("MG",2022,420000)
let car2 = new Car("Tesla",2020,6000)
let car3 = new Car("Audi",2021,7000)

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`)
car1.run()