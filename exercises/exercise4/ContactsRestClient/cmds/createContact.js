//createContact.js
const axios = require('axios');

const url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('calling POST')
    let {firstName, lastName, email} = args
    console.log(args)
    axios.post(url, {}).then(resp => {
    console.log(resp.data);
    });
}