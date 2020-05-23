// no need to use `new` in this usage

function TimeoutWrapper() {

    var timerIds = [];

    return {
        addTimeout: (fn, ms) => {

            var timerId = setTimeout(fn, ms);

            timerIds.push(timerId);
        },
        clearAll: () => {

            for (var i = 0; i < timerIds.length; i++) {
                clearTimeout(timerIds[i]);
            }
        }
    }
}

var myWrapper = TimeoutWrapper();

myWrapper.addTimeout(function () {
    console.log('Hello');
}, 4000);

myWrapper.addTimeout(function () {
    console.log('World');
}, 2000);

myWrapper.addTimeout(function () {
    myWrapper.clearAll();
}, 5000);