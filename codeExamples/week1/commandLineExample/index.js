const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  console.log("args is: ");
  console.log(args);
  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }
  console.log("------------")
  console.log(cmd);
  switch (cmd) {
    case 'today':
      require('./cmds/today')(args)
      break
    case 'foo':
      require('./cmds/foo')
      break
    case 'version':
      require('./cmds/version')(args)
      break
    case 'help':
      require('./cmds/help')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}
