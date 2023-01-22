//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
// Steps 5 - 9
class Car extends Vehicle {
    constructor (make, model, year, color, mileage) {
        super (make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
//steps 9 & 10
    loadPassenger(num){
        if(this.passenger < this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
        }
    } else {
        console.log(this.model + " " + this.make + " is full")
    }

    start(){
        if(this.fuel > 0) {
            console.log("engine has started.");
            return this.started === true
        } else {
            console.log("no fuel");
            return this.started === false;
        }
    }

    serviceTime(mileage){
        if(this.mileage > 30000){
            console.log("time for maintenance")
            return this.scheduleService === true
        } 
    }
}