module.exports = {
    name: 'invite-link',
    description: "this gives the user a invite link so a person can join the server ",
    execute(message, args){
        message.channel.send('https://discord.gg/r7ppdYkPj4');
    }
}