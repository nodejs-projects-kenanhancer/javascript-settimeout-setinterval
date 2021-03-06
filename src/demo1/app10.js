// IIFE (Immediately Invokable Function Expression)

var TimeoutWrapper = (function () {

    var timerIds = [];

    function TimeoutWrapper() {
        if (!(this instanceof TimeoutWrapper)) {
            throw new Error("`TimeoutWrapper` invoked without `new`");
        }
    }

    TimeoutWrapper.prototype.addTimeout = (fn, ms) => {

        var timerId = setTimeout(fn, ms);

        timerIds.push(timerId);
    };

    TimeoutWrapper.prototype.clearAll = () => {

        for (var i = 0; i < timerIds.length; i++) {
            clearTimeout(timerIds[i]);
        }
    };

    return TimeoutWrapper;
})();

var myWrapper = new TimeoutWrapper();

myWrapper.addTimeout(function () {
    console.log('Hello');
}, 4000);

myWrapper.addTimeout(function () {
    console.log('World');
}, 2000);

myWrapper.addTimeout(function () {
    myWrapper.clearAll();
}, 5000);