const form = document.getElementById('soda-form');
const resultado = document.getElementById('resultado');
const mensagemVontade = document.getElementById('mensagem-vontade');

// Mensagens personalizadas para cada refri
const provocacoes = {
    coca: "Uma Coca-Cola estupidamente gelada, com gelo, uma rodela de limão e o gás estalando... Mas você só pode ficar olhando! 🥤🧊",
    fanta: "Aquela Fanta Uva roxinha, doce e trincando de tão fria! Ficou com água na boca, né? 🍇✨",
    guarana: "Aquele Guaraná super dourado, com a latinha suando de gelada... Que pena que ela não sai da tela! 🍃🥶",
    pepsi: "Uma Pepsi bem gelada descendo na garganta naquele dia quente... Ficou só na imaginação! 🔵🧊"
};

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que a página recarregue

    // Pega o valor do rádio selecionado
    const refriSelecionado = document.querySelector('input[name="refrigerante"]:checked').value;

    // Coloca a mensagem na tela
    mensagemVontade.innerText = provocacoes[refriSelecionado];

    // Exibe o painel de resultado
    resultado.classList.remove('escondido');
});