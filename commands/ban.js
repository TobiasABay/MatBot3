module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){

        const target = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(target.id);
        
        // const user = username;
        if(target){
            
            memberTarget.ban();
            message.channel.send(`The user has been banned: ${memberTarget}!`);
        }else{
            message.channel.send(`You couldn't ban that member!`);
        }
    }
}