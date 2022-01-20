//getContacts.js

const axios = require('axios');

const url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('calling GET')
    console.log(args)
    axios.get(url).then(resp => {
    console.log(resp.data);
    });
}