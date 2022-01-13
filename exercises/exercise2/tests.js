// import data from testData.js and assign it to a variable

function testFilter(testData, expectedData) {
    let result = testData.filter()
    if (result === expectedData) {
        console.log('filter passed')
    }  else {
        // can also throw an error
        console.log('filter failed')
    }
}

testFilter()