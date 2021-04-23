module.exports = {
    name: 'pyth',
    description: " This is a command that solves pythagoras with help from inputs from the user!",
    execute(message, args, user){
        let result, result_floor;
        
        if (!args[0]) {
            return message.channel.send(`type: "!pyth help" for more help`);
        }

        if (args[0] == 'help') {
            return message.channel.send(`
            This is pythagoras sentence:
            "In a right angled triangle: the square of the hypotenuse is equal to the sum of the squares of the other two sides.".
            Translated it means that the sum of the length if the short sites multiplied with itself, is equal to the length of the longest site multiplied with itself.
            In a right angled triangle with the sites a,b,c(where if c is the hypotenuse - the longest one) then will pythagoras sentence have the following formula
            ${message.author}!

            Formel: a^2 + b^2 = c^2
        
            c=sqrt{a^2 + b^2}
        
            a=sqrt{c^2 - b^2}
                
            b=sqrt{c^2 - a^2}
        
            Link: https://www.mathsisfun.com/pythagoras.html \n
            
            To use pyth you can write the following commands:
                "!pyth a c b"
                "!pyth b c a"
                "!pyth c a b"

            The first letter (!pyth "a" c b) is the missing varible. After this you can calculate the missing variable.
                Example: !pyth c 3 4
                Result: Result srqt((3 * 3) - (4 * 4) = 5
            `);
        }

        if (args[0] == 'a') {
            if (!args[0] || !args[1] || !args[2] || args[1] < args[2]) {
                message.channel.send(`Unknown variable, for more help write "!pyth help", ${message.author}!`);
            } 
            result = Math.sqrt((args[1] * args[1]) - (args[2] * args[2]));
            result_floor = Math.floor(result);
            message.channel.send(`Result: srqt((${args[1]} * ${args[1]}) - (${args[2]} * ${args[2]}) = ${ result_floor} ${message.author}!`);
        }

        if (args[0] == 'b') {
            if (!args[0] || !args[1] || !args[2] || args[1] < args[2]) {
                message.channel.send(`Unknown variable, for more help write "!pyth help", ${message.author}!`);
            } 
            result = Math.sqrt((args[1] * args[1]) - (args[2] * args[2]));
            result_floor = Math.floor(result);
            message.channel.send(`Result: srqt((${args[1]} * ${args[1]}) - (${args[2]} * ${args[2]}) = ${ result_floor} ${message.author}!`);
        }

        if (args[0] == 'c') {
            if (!args[0] || !args[1] || !args[2] ) {
                message.channel.send(`Unknown variable, for more help write "!pyth help", ${message.author}!`);
            } 
            result = Math.sqrt((args[1] * args[1]) + (args[2] * args[2]));
            result_floor = Math.floor(result);
            message.channel.send(`Result: srqt((${args[1]} * ${args[1]}) - (${args[2]} * ${args[2]}) = ${ result_floor} ${message.author}!`);
        }        
        message.channel.send('Link: https://www.calculator.net/pythagorean-theorem-calculator.html');
    }
}