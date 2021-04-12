module.exports = {
    name: 'hej',
    description: "this is a ping command! ",
    execute(message, args, user){
        message.channel.send(`Hej ${user.username}!`);
    }
}