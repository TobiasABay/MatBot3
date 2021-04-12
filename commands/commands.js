module.exports = {
    name: 'commands',
    description: "this is a ping command! ",
    execute(message, args){
  
  // list of themes to pick from
  var commands = [
    '\n !ban [NAME] (Only works with MOD rule)',
    '\n !funfact',
    '\n !hej', 
    '\n !invite',
    '\n !invitebot',
    '\n !kick (Only works with MOD rule)', 
    '\n !ping', 
    '\n !restart (Only works with MOD rule)'

  ];
  

  // announce the theme
  message.channel.send('Commands:' + commands);

    }
}

