function TimeoutWrapper() {
    if (!(this instanceof TimeoutWrapper)) {
        throw new Error("`TimeoutWrapper` invoked without `new`");
    }

    this.timerIds = [];
}

TimeoutWrapper.prototype.addTimeout = function (fn, ms) {

    var timerId = setTimeout(fn, ms);

    this.timerIds.push(timerId);
};

TimeoutWrapper.prototype.clearAll = function () {

    for (var i = 0; i < this.timerIds.length; i++) {
        clearTimeout(this.timerIds[i]);
    }
};

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