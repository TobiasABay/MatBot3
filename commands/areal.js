module.exports = {
    name: 'areal',
    description: "this is a ping command! ",
    execute(message, args, user){
        let result, result_floor;

        if (args[0] == 'help') {
            return message.channel.send(`For at beregne et areal af given figur, så skal der være mellemrum mellem tallene således "!areal trekant 3 5", "!areal firkant 5 5" eller "!areal femkant 5" ${message.author}!`);
        }

        if (args[0] == 'trekant' || args[0] == 'Trekant') {
            if (!args[0] || !args[1] || !args[2] ) {
                message.channel.send(`Ukendt værdi, for mere hjælp skriv "!areal help", ${message.author}!`);
           } 
                result = (+args[1] + +args[2]) / 2;
                message.channel.send(`\n Result: (${args[1]} + ${args[2]}) / 2 = ${result}`);
        }

        else if (args[0] == 'firkant' || args[0] == 'Firkant') {
            if (!args[0] || !args[1] || !args[2] ) {
                message.channel.send(`Ukendt værdi, for mere hjælp skriv "!areal help", ${message.author}!`);
           } 
            result = +args[1] * +args[2];
            message.channel.send(`\n Result: ${args[1]} * ${args[2]} = ${result}`);
       } 

        else if (args[0] == 'femkant' || args[0] == 'Femkant') {
            if (!args[0] || !args[1]) {
                message.channel.send(`Ukendt værdi, for mere hjælp skriv "!areal help", ${message.author}!`);
           } 
            result = (Math.sqrt(25+10*Math.sqrt(5)) / 4) * +args[1];
            result_floor = Math.floor(result);
            message.channel.send(`\n Result: (sqrt(25+10*sqrt(5)) / 4) * ${args[1]} = ${result_floor}`);
        }
    }
}