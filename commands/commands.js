module.exports = {
    name: 'commands',
    description: "this is a list that shows all the commands that the bot have! ",
    execute(message, args){
  
  // list of themes to pick from
  var commands_common = [
    '\n !help',
    '\n !ban',
    '\n !funfact',
    '\n !hello', 
    '\n !invite',
    '\n !invitebot',
    '\n !kick', 
    '\n !ping', 
    '\n !restart',
    '\n !roles',

  ];
  
  var commands_math = [
    '\n Math Functions:',
    '\n !area',
    '\n !bmi',
    '\n !calc',
    '\n !pyth',
    '\n !pct',
  ];

  // announce the theme
  message.channel.send('Commands:' + commands_common + '\n' + commands_math);

    }
}

