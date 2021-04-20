module.exports = {
    name: 'help',
    description: "this is a ping command! ",
    execute(message, args, user){
        message.channel.send(`Hello ${user.username}! - Thanks for choosing MathBot. \n Mathbot is made to help young people with mathematical problems and equations \n Write "!commands" to find the commads, that MathBot can use \n Enjoy using MathBot and its commands`);
    }
}