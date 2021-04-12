module.exports = {
    name: 'help',
    description: "this is a ping command! ",
    execute(message, args, user){
        message.channel.send(`Hej ${user.username}! - Tusind tak for at bruge MatBot. \n Matbot er udviklet specielt til at hjælpe unge med matematetiske problemer \n Skriv "!commands" for at finde alle de tilgængelige commands, som MatBot tilbyder \n God fornøjelse med at bruge Matbot og dets funktioner`);
    }
}