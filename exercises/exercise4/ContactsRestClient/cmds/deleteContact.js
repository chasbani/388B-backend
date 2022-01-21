//deleteContact.js
const axios = require('axios');

let url = 'http://localhost:3000/api/v1/contacts/'

module.exports = (args) => {
    console.log('calling DELETE')
    let id = args._[2];
    // console.log(args)
    axios.delete(url+id, {}).then(resp => {
    console.log(resp.data);
    });
}