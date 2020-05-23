// setTimeout allows to run a function once after the interval of time.

var timerId1 = setTimeout(function () {
    console.log('timerId1: Hello World');
}, 1000);

var timerId2 = setTimeout(function (firstName, lastName) {
    console.log("timerId2: Hello", firstName, lastName);
}, 1000, "KENAN", "HANCER");

var timerId3 = setTimeout(() => console.log('timerId3: Hello World'), 1000);

var timerId4 = setTimeout((firstName, lastName) => console.log("timerId4: Hello", firstName, lastName), 1000, "KENAN", "HANCER");

var sayHello = () => console.log('timerId5: HELLO WORLD');
var timerId5 = setTimeout(sayHello, 1000);

var sayHello2 = (firstName, lastName) => console.log("timerId6: Hello", firstName, lastName);
var timerId6 = setTimeout(sayHello2, 1000, "Kenan", "Hancer");

// Reqursive setTimeout
var timerId7 = setTimeout(function tick() {
    console.log("Reqursive setTimeout every 2000ms");

    timerId7 = setTimeout(tick, 200);
}, 200);

// after 2 seconds stop all timers
var timerId8 = setTimeout(() => {
    clearTimeout(timerId1);
    clearTimeout(timerId2);
    clearTimeout(timerId3);
    clearTimeout(timerId4);
    clearTimeout(timerId5);
    clearTimeout(timerId6);
    clearTimeout(timerId7);
    clearTimeout(timerId8);

    console.log("Stop all setTimeouts after 2000ms",
        timerId1,
        timerId2,
        timerId3,
        timerId4,
        timerId5,
        timerId6,
        timerId7,
        timerId8
    );
}, 2000);