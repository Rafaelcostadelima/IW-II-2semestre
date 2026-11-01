const form = document.getElementById('soda-form');
const resultado = document.getElementById('resultado');
const imagemVontade = document.getElementById('imagem-vontade');
const mensagem = document.getElementById('mensagem');
const extra = document.getElementById('efeito-som');

// Mensagens personalizadas para cada refri
const imagens = {
    coca: "img/img-coca.png",
    fanta: "img/img-fanta-uva.png",
    guarana: "img/img-guarana.png",
    pepsi: "img/img-pepsi.png"
};

const mensagens = {
    coca: "Uma coca cola gelada cai bem quando tá calor né",
    fanta: "Imagina um refrigerante de uva bem agora, quão bom que seria...",
    guarana: "Um refrigerante brasileiro bem gostoso agora cairia bem demais",
    pepsi: "Uma pepsi tem nada de diferente da coca, só pega a coca logo"
}

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que a página recarregue

    // Pega o valor do rádio selecionado
    const refriSelecionado = document.querySelector('input[name="refrigerante"]:checked').value;
    const mensagemRespectiva = document.querySelector('input[name="refrigerante"]:checked').value;

    // Coloca a mensagem na tela
    imagemVontade.src = imagens[refriSelecionado];
    mensagem.innerText = mensagens[refriSelecionado];

    if (refriSelecionado == "pepsi") {
        extra.innerText = "Só escolhe a coca logo bro. Para de dar uma de diferentão ae cara kakkakakaka"
    } else {
        extra.innerText = "Passando vontade né kakakkaka"
    }

    // Exibe o painel de resultado
    resultado.classList.remove('escondido');
});