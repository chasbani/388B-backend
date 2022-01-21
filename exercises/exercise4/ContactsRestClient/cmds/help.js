//help.js
const menus = {
    main: `
    contactsclient [command] <options>  
    The <options> parameters should contain everything you need to make successful rest request of type [command]. You may find this helpful for what to pass to the axios client which you wil be using to make your rest calls:  
    <https://www.npmjs.com/package/axios#example>.
  
      get .............. show all contacts
      create ........... create a new contact
      update ........... update an existing contact
      delete ........... delete an existing contact
      help ............... show help menu for a command`,
  
    GET: `
    contactsclient GET`,

    POST: `
    contactsclient POST <options>
    the options should be firstName, lastName, phoneNumber, email`,

    PUT: `
    contactsclient PUT <options>
    the options should be id, firstName, lastName, phoneNumber, email`,

    
    DELETE: `
    contactsclient DELETE <options>
    the options should be id of the element to delete`,

  }
  
  module.exports = (args) => {
    console.log("***********")
    console.log(args._[0])
    const subCmd = args._[1] === 'HELP' ? args._[2] : args._[1]
    console.log(subCmd)
    console.log(menus[subCmd] || menus.main)
  }