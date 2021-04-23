module.exports = {
    name: 'roles',
    description: "this is a ping command! ",
    execute(message, args, user, Discord, client){
            //message.react('🟢');
            //message.react('🟡');
        	//message.react('🔴');
        
                    const channel = '654263697656512512';
                    const MatA = message.guild.roles.cache.find(role => role.name === "MatA");
                    const MatB = message.guild.roles.cache.find(role => role.name === "MatB");
             
                    const yellowTeamEmoji = '🟡';
                    const greenTeamEmoji = '🟢';
             
                    let embed = new Discord.MessageEmbed()
                        .setColor('#e42643')
                        .setTitle('Choose a team to play on!')
                        .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                            + `${yellowTeamEmoji} for MatA Team\n`
                            + `${greenTeamEmoji} for MatB Team`);

                    let messageEmbed = message.channel.send(embed);        
                    messageEmbed.react(yellowTeamEmoji);
                    messageEmbed.react(greenTeamEmoji);
             
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
                                await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                            }
                        } else {
                            return;
                        }
             
                    });
             
                }
             
            }