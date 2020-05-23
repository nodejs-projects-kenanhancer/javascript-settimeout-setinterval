//setInterval allows to run a function reqularly with the interval between the runs.
var timerId1 = setInterval(() => console.log("Hello World"), 3000);

// after 12 seconds stop timers
var timerId2 = setTimeout(() => {
    clearInterval(timerId1);
    clearInterval(timerId2);

    console.log("Stop all setIntervals", timerId1, timerId2);
}, 12000);