module.exports = {
    name: 'percentage',
    description: "this is a ping command! ",
    execute(message, args, user){
        //${user.username}

        if (args[0] == 'help') {
            return message.channel.send(`If you wanna calculate a percentage of two numbers, then write the command like this "!p [first numer] [second number]" - example; "!p 20 80" ${message.author}!`);
        };
    }
}