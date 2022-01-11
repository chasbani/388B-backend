const menus = {
  main: `
    weather [command] <options>

    today .............. show weather for today
    version ............ show package version
    help ............... show help menu for a command`,

  today: `
    weather today <options>

    --location, -l ..... the location to use`,
}

module.exports = (args) => {
  console.log("***********")
  console.log(args._[0])
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0]
  console.log(subCmd)
  console.log(menus[subCmd] || menus.main)
}