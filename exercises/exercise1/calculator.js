const modules = require("./functions.js");

function main() {
    console.log('running script')
    // call your functions here
    console.log(modules.add(12,3));
    console.log(modules.subtract(12,3));
    console.log(modules.multiply(12,3));
    console.log(modules.divide(12,3));
    console.log('done running script')
}

main()