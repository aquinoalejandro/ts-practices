import { Car2 } from "./punto8";

class ElectricCar extends Car2 {
    batteryLife: number;
  
    constructor(make: string) {
      super(make);
      this.batteryLife = 100;
    }
  
    charge() {
      console.log("La bateria se esta cargando...");
    }
  }
  
  const eCar = new ElectricCar("Tesla");
  eCar.charge();