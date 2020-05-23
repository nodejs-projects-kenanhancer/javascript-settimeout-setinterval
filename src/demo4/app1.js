// every function defines its own `this` value.
// However, it is not the case for the arrow function.
// Inside the anonymous function of the `setTimeout()` function,
// the `this.speed` is `undefined`.
// The reason is that `this` of the anonymous function shadows the `this` of the `speedUp()` method

function Vehicle() {

    this.speed = 0;

    this.speedUp = function (speed) {

        this.speed = speed;

        setTimeout(function () {
            console.log(this.speed); // undefined
        }, 1000);
    };
}

var vehicle1 = new Vehicle();
vehicle1.speedUp(50);


function VehicleV2() {

    this.speed = 0;

    this.speedUp = function (speed) {

        this.speed = speed;
        var self = this;

        setTimeout(function () {
            console.log(self.speed);
        }, 1000);
    };
}

var vehicle2 = new VehicleV2();
vehicle2.speedUp(50);


function VehicleV3() {

    this.speed = 0;

    this.speedUp = function (speed) {

        this.speed = speed;

        setTimeout(() => console.log(this.speed), 1000);
    }
}

var vehicleV3 = new VehicleV3();
vehicleV3.speedUp(50);