module.exports = {
    name: 'bmi',
    description: "this is a ping command! ",
    execute(message, args, command){
        let result, result_floor;

        if (args[0] == 'help') {
            return message.channel.send(`For at beregne to værdier skal der være mellemrum mellem tallene således "2 + 2", "4 * 4" eller "100 / 100", ${message.author}!`);
        }

        if (!args[0] || !args[1]) {
            return message.channel.send(`Ukendt værdi, for mere hjælp skriv "!bmi help", ${message.author}!`);
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
    }
}