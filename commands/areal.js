module.exports = {
    name: 'area',
    description: "this is a ping command! ",
    execute(message, args, user, command){
        let result, result_floor;

        if (args[0] == 'help' || command == "area") {
            return message.channel.send(`If you wanna get the area of a given figure, then there gotta be space between the numbers like this example "!area triangle 3 5", "!area square 5 5" eller "!area pentagon 5" ${message.author}!`);
        }

        if (args[0] == 'triangle' || args[0] == 'Triangle') {
            if (!args[0] || !args[1] || !args[2] ) {
                message.channel.send(`Unknowns variable, for more help write "!area help", ${message.author}!`);
           } 
                result = (+args[1] * +args[2]) / 2;
                message.channel.send(`\n Result: (${args[1]} * ${args[2]}) / 2 = ${result}`);
        }

        else if (args[0] == 'square' || args[0] == 'Square') {
            if (!args[0] || !args[1] || !args[2] ) {
                message.channel.send(`Unknowns variable, for more help write "!area help", ${message.author}!`);
           } 
            result = +args[1] * +args[2];
            message.channel.send(`\n Result: ${args[1]} * ${args[2]} = ${result}`);
       } 

        else if (args[0] == 'pentagon' || args[0] == 'Pentagon') {
            if (!args[0] || !args[1]) {
                message.channel.send(`Unknowns variable, for more help write "!area help", ${message.author}!`);
           } 
            result = (Math.sqrt(25+10*Math.sqrt(5)) / 4) * +args[1];
            result_floor = Math.floor(result);
            message.channel.send(`\n Result: (sqrt(25+10*sqrt(5)) / 4) * ${args[1]} = ${result_floor}`);
        }
        message.channel.send('Kilde: https://www.omnicalculator.com/math/area');
    }
}