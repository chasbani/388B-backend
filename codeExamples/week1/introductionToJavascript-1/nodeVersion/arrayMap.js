let numbers = [1, 4, 9];
let doubles = numbers.map(function (num) {
    return num * 2;
});

let triples = numbers.map( (n,v) => {
    console.log(v)
    return n * 3;
})
console.log(numbers)
console.log(doubles)
console.log(triples)