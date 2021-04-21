module.exports = {
    name: 'bmi',
    description: "this is a ping command! ",
    execute(message, args, command){
        let result, result_floor;

        if (!args[0]) {
            return message.channel.send(`type: "!bmi help" for more help`);
        }

        if (args[0] == 'help') {
            return message.channel.send(`To calculate you BMI, then you gotta give the bot to variables, weight and height - You gotta write the folling command "!bmi kg height" example "!bmi 68 172", ${message.author}!`);
        }

        if (!args[0] || !args[1]) {
            return message.channel.send(`Uknown variable, for help write "!bmi help", ${message.author}!`);
        }
        else{
            if(args[1] > 3) {args[1] = args[1] / 100}
            result = args[0] / (args[1] * args[1]);
            result_floor = Math.floor(result);
        }
            
        message.channel.send(`\nResult: ${args[0]} / (${args[1]} * ${args[1]}) = ${result_floor}`, {
            files: [
                "./BMI.png"
            ]
        });
        message.channel.send('Kilde: https://www.calculator.net/bmi-calculator.html');
    }
}