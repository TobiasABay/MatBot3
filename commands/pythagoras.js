module.exports = {
    name: 'pyth',
    description: "Beregner pythagoras ved hjælp af input fra brugeren",
    execute(message, args, user){
        let result, result_floor;
        
        if (args[0] == 'help') {
            return message.channel.send(`
            Den pythagoræiske læresætning er:
            "I alle retvinklede trekanter er summen af kateternes kvadrat lig hypotenusens kvadrat."
            Oversat betyder det, at summen af længden af de korte sider ganget med sig selv, er lig længden af den længste side ganget sig selv.
            I en retvinklet trekant med siderne a,b,c (hvor c er hypotenusen - den længste) får den pythagoræiske læresætning følgende formel,
            ${message.author}!

            Formel: a^2 + b^2 = c^2
        
            c=sqrt{a^2 + b^2}
        
            a=sqrt{c^2 - b^2}
                
            b=sqrt{c^2 - a^2}
        
            Kilde: https://www.regneregler.dk/retvinklet-trekant-pythagoras \n
            
            For at bruge pyth funktionen kan man skriver mulighederne:
                "!pyth a c b"
                "!pyth b c a"
                "!pyth c a b"

            Det første bogstav (!pyth "a" c b) skal betrages som den manglende værdi. Herefter bruger du de andre til at beregne den mangelden værdi
                Eksempel: !pyth c 3 4
                Resultat: Result srqt((3 * 3) - (4 * 4) = 5
            `);
        }

        if (args[0] == 'a') {
            if (!args[0] || !args[1] || !args[2] || args[1] < args[2]) {
                message.channel.send(`Ukendt værdi, for mere hjælp skriv "!pyth help", ${message.author}!`);
            } 
            result = Math.sqrt((args[1] * args[1]) - (args[2] * args[2]));
            result_floor = Math.floor(result);
            message.channel.send(`Result: srqt((${args[1]} * ${args[1]}) - (${args[2]} * ${args[2]}) = ${ result_floor} ${message.author}!`);
        }

        if (args[0] == 'b') {
            if (!args[0] || !args[1] || !args[2] || args[1] < args[2]) {
                message.channel.send(`Ukendt værdi, for mere hjælp skriv "!pyth help", ${message.author}!`);
            } 
            result = Math.sqrt((args[1] * args[1]) - (args[2] * args[2]));
            result_floor = Math.floor(result);
            message.channel.send(`Result: srqt((${args[1]} * ${args[1]}) - (${args[2]} * ${args[2]}) = ${ result_floor} ${message.author}!`);
        }

        if (args[0] == 'c') {
            if (!args[0] || !args[1] || !args[2] ) {
                message.channel.send(`Ukendt værdi, for mere hjælp skriv "!pyth help", ${message.author}!`);
            } 
            result = Math.sqrt((args[1] * args[1]) + (args[2] * args[2]));
            result_floor = Math.floor(result);
            message.channel.send(`Result: srqt((${args[1]} * ${args[1]}) - (${args[2]} * ${args[2]}) = ${ result_floor} ${message.author}!`);
        }        
        message.channel.send('Kilde: https://www.calculator.net/pythagorean-theorem-calculator.html');
    }
}