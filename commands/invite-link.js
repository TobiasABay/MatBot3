module.exports = {
    name: 'invite-link',
    description: "this gives the user a invite link",
    execute(message, args){
        message.channel.send('https://discord.gg/r7ppdYkPj4');
    }
}