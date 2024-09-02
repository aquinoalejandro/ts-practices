export class Car2 {
    make: string;

    constructor(make: string) {
        this.make = make
    }
    drive(): void {
        console.log("Driving a " + this.make);
    }
}

let car2 = new Car2("Audi");
car2.drive();