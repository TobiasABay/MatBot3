module.exports = {
    name: 'hello',
    description: "this command says hello to the user! ",
    execute(message, args, user){
        message.channel.send(`Hello ${user.username}!`);
    }
}