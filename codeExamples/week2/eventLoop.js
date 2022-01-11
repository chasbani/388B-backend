const callbackPromise = function(value) {
    console.log('callback promise');
}
const p = new Promise(function(resolve) {
    console.log('making promise')
    //return setTimeout(resolve, 1000);
    // What happens if we wrap the resolve callback in setTimeout ?
    resolve()
});
console.log('Printing.....');
p.then(callbackPromise).then(()=> console.log('chained promise')).then(()=> console.log('last promise'));
setTimeout(function() {
    console.log('When will this print????')
}, 3000);
Promise.resolve()
    .then(() => {
        console.log('resolved promise 1')
        //return setTimeout(function() {
        //  console.log('When will this print??')
        //}, 1000);;
    })
    .then(() => {
        console.log('resolved promise 2')
    })
console.log('Finished main task');
//p.then(callbackPromise).then(()=> console.log('chained promise'));
Promise.resolve()
    .then(() => {
        console.log('resolved promise 3')
        //return setTimeout(function() {
        //  console.log('wickeddddddd')
        //}, 1000);;
    })
    .then(() => {
        console.log('resolved promise 4')
    })
