module.exports = {
    name: 'ping',
    description: "this is a ping pong command! ",
    execute(message, args){
        message.channel.send('pong!');
    }
}