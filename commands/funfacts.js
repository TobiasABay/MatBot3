module.exports = {
    name: 'funfact',
    description: "this is a ping command! ",
    execute(message, args){
  
  // list of themes to pick from
  var funfacts = [
    'Denmark have one of the happiest countries in the world',
    'The Danish language has no word for "please"',
    'Denmark have the oldest flag in the world called Danneborg',
    'Denmark has 444 islands, but only 76 of them are inhabited',
    'Denmark have a word for that cosy feeling of togetherness: Hygge',
    'Danish pastry actually origins from Vienna',
    "Denmark don't have any mountains, so biking is never uphill",
    'More than 50% of Copenhageners cycle to and from work every day',
    'The Danish alphabet has 3 additional letters: Æ, Ø, and Å',
    'Denmark have some weird Danish traditions like Fastalavn and Sankt Hans',
    "You'll find the two oldest amusement parks in the world in Denmark"
  ];
  
  // pick a random theme
  var index = Math.floor(Math.random() * funfacts.length);
  var theme = funfacts[index];
  
  // announce the theme
  message.channel.send('Funfact: `' + theme + '`');

    }
}

