module.exports = {
    name: 'pyth',
    description: " ",
    execute(message, args, user){

        let resulta, resultb, resultc;

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

        Kilde: https://www.regneregler.dk/retvinklet-trekant-pythagoras`);
        }

    if (args[0] == 'a') {
        if (!args[0] || !args[1] || !args[2] ) {
            message.channel.send(`Ukendt værdi, for mere hjælp skriv "!areal help", ${message.author}!`);
       } 
       resulta = srqt((args[1] * args[1]) - (args[2] * args[2]));
       message.channel.send(`Result: srqt((args[1] * args[1]) - (args[2] * args[2]) = ${resulta} ${message.author}!`);
    }

    else if (args[0] == 'b') {
        if (!args[0] || !args[1] || !args[2] ) {
            message.channel.send(`Ukendt værdi, for mere hjælp skriv "!areal help", ${message.author}!`);
       } 

    }

    else if (args[0] == 'c') {
        if (!args[0] || !args[1] || !args[2] ) {
            message.channel.send(`Ukendt værdi, for mere hjælp skriv "!areal help", ${message.author}!`);
       } 

    }

}
}