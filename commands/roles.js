module.exports = {
    name: 'roles',
    description: "this is a ping command! ",
    execute(message, args, user){
            message.react('🟢');
            message.react('🟡');
        	message.react('🔴');
        
    }
}