module.exports = {
    name: 'restart',
    description: "this will restart the server",
    execute(message, args){
        message.channel.send('The server has been Restarted!').then(() => {
            process.exit(1);
          })
    }
}