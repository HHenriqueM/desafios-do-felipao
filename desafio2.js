const readline = require('readline'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/* 
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através
do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

rl.question('Informe a quantidade de vitórias: ', (vitoriaInput) => {
    rl.question('Informe a quantidade de derrotas: ', (derrotaInput) => {

        // 1. Converta os valores recebidos para números inteiros
        let qtdVitoria = parseInt(vitoriaInput);
        let qtdDerrota = parseInt(derrotaInput);


        function saldoRankeadas(vitorias, derrotas) {
            let saldoVitorias = vitorias - derrotas
            return saldoVitorias;            
        }

        let saldo = saldoRankeadas(qtdVitoria, qtdDerrota);
        let nivel = "";

        if (saldo <= 10){
          nivel = "Ferro";
        }
        else if (saldo >= 11 && saldo <= 20){
          nivel = "Bronze";
        }

        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`);
     
        rl.close(); // Encerra a leitura        
    });
});