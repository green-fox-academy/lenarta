export { }

'use strict';

class Car {
    //field 
    engine: string;
    color: string;

    //constructor 
    constructor(engine: string) {
        this.engine = engine
    }

    //function 
    disp(): void {
        console.log("Function displays Engine is  :   " + this.engine)
    }
}

//create an object 
let obj = new Car("XXSY1")
let obj = new Car()
//access the field 
console.log("Reading attribute value Engine as :  " + obj.engine)

//access the function
obj.disp()






