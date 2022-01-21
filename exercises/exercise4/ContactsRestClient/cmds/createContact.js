//createContact.js
const axios = require('axios');

const url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('calling POST')
    let fN = args._[2];
    let lN = args._[3];
    let pN = args._[4];
    let e = args._[5];
    console.log(fN);
    console.log(args)
    axios.post(url, {firstName: fN, lastName: lN, phoneNumber: pN, email: e}).then(resp => {
    console.log(resp.data);
    });
}