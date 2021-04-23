module.exports = {
    name: 'hello',
    description: "this is a ping command! ",
    execute(message, args, user){
        if(message.content === 'rules'){
            message.react('835044316262563871');
	        message.react('835044316262563871');
        	message.react('835045396870594560');
        }
    }
}