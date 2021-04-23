module.exports = {
    name: 'invite-bot',
    description: "this gives the user a invite link so the bot can join the server",
    execute(message, args){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=654264973199015947&scope=bot&permissions=2147483647');
    }
}