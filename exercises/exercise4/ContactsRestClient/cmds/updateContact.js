//updateContact.js
const axios = require('axios');

const url = 'http://localhost:3000/api/v1/contacts/'

module.exports = (args) => {
    console.log('calling PUT')
    let id = args._[2];
    let fN = args._[3];
    let lN = args._[4];
    let pN = args._[5];
    let e = args._[6];
    console.log(fN);
    console.log(args)
    axios.put(url+id, {firstName: fN, lastName: lN, phoneNumber: pN, email: e}).then(resp => {
    console.log(resp.data);
    });
}