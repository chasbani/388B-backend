let atLeastOneOdd = [2, 6, 8, 1, 4].some(isOdd); 
let allOdd1 = [2, 6, 8, 1, 4].every(isOdd); 
let allOdd2 = [1, 3, 5, 9, 7].every(isOdd); 

// index and array are optional
function isOdd(elem, index, array){
    return (elem % 2 === 1);
}

console.log(`atleastOneOdd: ${atLeastOneOdd}`)
console.log(`allOdd1: ${allOdd1}`)
console.log(`allOdd2: ${allOdd2}`)