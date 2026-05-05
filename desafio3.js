const readline = require('readline'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class herói {
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    atacar(){
        let ataque;

        if(this.tipo === 'mago'){
            ataque = 'usou magia';
        }else if (this.tipo === 'guerreiro'){
            ataque = 'usou espada';
        }else if (this.tipo === 'monge'){
            ataque = 'usou artes marciais';
        }else if (this.tipo === 'ninja'){
            ataque = 'usou shuriken';
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);    
    }
}

rl.question('Informe seu nome de Herói: ', (nomeInput) => {
    rl.question('Informe sua idade: ', (idadeInput) => {
       rl.question('Informe o tipo: ', (tipoInput) => {

            const meuHeroi = new herói(nomeInput, parseInt(idadeInput), tipoInput);            
            meuHeroi.atacar();        
                   
            rl.close();       
        });               
    });
});

