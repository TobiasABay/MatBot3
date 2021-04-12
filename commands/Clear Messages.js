module.exports = {
    name: 'clear',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        if(!args[0]) return message.reply("please skriv det antal beskeder du ønsker at slette!");
        else if(isNaN(args[0])) return message.reply("please skriv et tal!");

        else if(args[0] < 1) return message.reply("du er nød til at have mindst 1 at slette");
        else if(args[0] > 100) return message.reply("please skriv et antal der er mindre end 100");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.reply('jeg har nu slettet ' + args[0] + ' beskeder');
        });

    }
}