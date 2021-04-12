module.exports = {
    name: 'pyth',
    description: " ",
    execute(message, args){
        const user = message.author;
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
}