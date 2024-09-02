class Car {
    make: string = "Toyota";
    drive() {
        console.log("Driving a " + [this.make]);
    }
}

let car = new Car();
car.drive();