module.exports = {
    name: 'clear',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        if(!args[0]) return message.reply("Be kind and write the numbers of messages you wanna delete!");
        else if(isNaN(args[0])) return message.reply("please write a number!");

        else if(args[0] < 1) return message.reply("You gotta have 1 message to deltet");
        else if(args[0] > 100) return message.reply("Please write an amount lower then 100");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.reply('I have now deleted ' + args[0] + ' messages');
        });

    }
}