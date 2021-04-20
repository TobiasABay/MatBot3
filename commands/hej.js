module.exports = {
    name: 'hello',
    description: "this is a ping command! ",
    execute(message, args, user){
        message.channel.send(`Hello ${user.username}!`);
        message.channel.send(`123 ${user.username}!`);
    }
}