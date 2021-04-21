module.exports = {
    name: 'calc',
    description: "this is a ping command! ",
    execute(message, args, command){
        let result;

        if (!args[0]) {
            return message.channel.send(`type: "!calc help" for more help`);
        }

        if (args[0] == 'help') {
            return message.channel.send(`To calculate to variables there gotta be space between the numbers like this "2 + 2", "4 * 4" eller "100 / 100", ${message.author}!`);
        }

        if (!args[0] || !args[1] || !args[2] ) {
            return message.channel.send(`Unknow varible, for help write "!calc help", ${message.author}!`);
        }


        if (args[1] == '+') {
            result = +args[0] + +args[2];
        }
        else if (args[1] == '-') {
            result = args[0] - args[2];
        }
        else if (args[1] == '*') {
            result = args[0] * args[2];
        }
        else {
            result = args[0] / args[2];
        }



        message.channel.send(`\nResult: ${args[0]} ${args[1]} ${args[2]} = ${result}`);
          
        
    


            }
        }