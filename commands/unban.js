module.exports = {
    name: 'unban',
    description: "This command unbans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.unban();
            message.channel.send("User has been unbanned" + target.id);
        }else{
            message.channel.send(`You couldn't unban that member!`);
        }
    }
}