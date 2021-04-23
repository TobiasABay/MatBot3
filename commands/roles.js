module.exports = {
    name: 'roles',
    description: "this is a ping command! ",
    execute(message, args, user){
            message.channel.send("test")
            message.react('🟡');
	        message.react('🟢');
        	message.react('🔴');
        
    }
}