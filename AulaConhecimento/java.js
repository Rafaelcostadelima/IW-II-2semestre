let var1;
// Isso cria uma variável que pode ser variada de acordo com o programa rodando, não é um número constante
const var2 = 0;
// Isso cria uma constante, onde NÃO pode ser alterada de acordo com o programa
var var3;

function teste () {
    var var4; 
    // var é o único que permite com que mesmo que a variável seja criada DENTRO da função, ela vale pro programa inteiro
    // Se for colocado uma constante ou um 'let' aqui dentro da função, os valores vão apenas valer para a função, nada a mais
}

let variavel1;
const variavel2 = null;
var variavel3 = "Teste";
let variavel4 = "10";

// Valores apresentados e definidos acima
console.log(variavel1);
console.log(variavel2);
console.log(variavel3);
console.log(variavel4);

console.log("Segue os tipos de cada arquivo:");

// Tipo das variáveis
console.log(typeof(variavel1));
console.log(typeof(variavel2));
console.log(typeof(variavel3));
console.log(typeof(variavel4));


function testeswitch (opcao) {
    switch (opcao) {
        case 1:
            var1 = 2;
        break;
        case 2:
            var1 = 14;
        break;
    }
    console.log(var1);
}

testeswitch(2)