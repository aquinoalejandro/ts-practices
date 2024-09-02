class Car3 {
    private make: string = "Chevrolet";

    drive(): void {
        console.log("Driving a " + this.make);
    }

    métodogetMake(): string {
        return this.make;
    }
}

let car3 = new Car3();
car3.drive();
//console.log(car3.make); esto da error
console.log(car3.métodogetMake());