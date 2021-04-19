module.exports = {
    name: 'pct',
    description: "this is a ping command! ",
    execute(message, args, user){
        //${user.username}

        if (args[0] == 'help') {
            return message.channel.send(`If you wanna calculate a percentage of two numbers, then write the command like this "!pct [first numer] [second number]" - example; "!p 20 80" ${message.author}!`);
        }

        if (!args[0] || !args[1]) {
            return message.channel.send(`Unknowns variable, for more help write "!pct help", ${user.username}!`);
        }
        else{
            result = args[0] / args[1] * 100
            result_floor = Math.floor(result);
        }
        message.channel.send(`\nResult: ${args[0]} / ${args[1]} * 100 = ${result_floor} %`
    )}
}