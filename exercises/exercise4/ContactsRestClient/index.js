const minimist = require('minimist');

//uncomment this code to see a sample of making an axios get request
//axios.get('http://webcode.me').then(resp => {
    //console.log(resp.data);
//});

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    console.log("args is: ");
    console.log(args);
    let cmd = args._[1] || 'help'
  
    // let request = args.request
    console.log("------------")
    console.log(cmd);
    switch (cmd) {
      case 'GET':
        require('./cmds/getContacts')(args)
        break
      case 'POST':
        require('./cmds/createContact')(args)
        break
      case 'PUT':
        require('./cmds/updateContact')(args)
        break
      case 'DELETE':
        require('./cmds/deleteContact')(args)
        break
      case 'HELP':
         require('./cmds/help')(args)
        break  
      default:
        console.error(`"${args}" is not a valid command!`)
        break
    }
  }
  