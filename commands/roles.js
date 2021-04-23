module.exports = {
    name: 'roles',
    description: "this is a ping command! ",
    async execute(message, args, Discord, client){
        const channel = '654263697656512512';

        const MatA = message.guild.roles.cache.find(role => role.name === "MatA");
        const MatB = message.guild.roles.cache.find(role => role.name === "MatB");
        const MatC = message.guild.roles.cache.find(role => role.name === "MatC");

        const greenTeamEmoji = '🟢';
        const yellowTeamEmoji = '🟡';
        const redTeamEmoji = '🔴';
             
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${greenTeamEmoji} for MatC Team\n`
                + `${yellowTeamEmoji} for MatB Team\n`
                + `${redTeamEmoji} for MatA Team`);

        let messageEmbed = await message.channel.send(embed);  
            messageEmbed.react(greenTeamEmoji);      
            messageEmbed.react(yellowTeamEmoji);
            messageEmbed.react(redTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
             
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenTeamEmoji);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamEmoji);
                }
                } else {
                    return;
                        }
             
                    });
             
                }
             
            }