module.exports = {
    name: 'commands',
    description: "this is a ping command! ",
    execute(message, args){
  
  // list of themes to pick from
  var commands_common = [
    '\n !ban',
    '\n !funfact',
    '\n !hej', 
    '\n !invite',
    '\n !invitebot',
    '\n !kick', 
    '\n !ping', 
    '\n !restart'

  ];
  
  var commands_math = [
    '\n Math Functions:',
    '\n !areal',
    '\n !bmi',
    '\n !calc',
    '\n !pyth',
  ];

  // announce the theme
  message.channel.send('Commands:' + commands_common + '\n' + commands_math);

    }
}

