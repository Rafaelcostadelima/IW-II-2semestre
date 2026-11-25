const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    document.getElementById("erroNome").textContent = "";
    document.getElementById("erroEmail").textContent = "";
    document.getElementById("erroIdade").textContent = "";
    document.getElementById("erroSenha").textContent = "";
    document.getElementById("erroConfirmarSenha").textContent = "";
    document.getElementById("mensagemSucesso").textContent = "";
    let valido = true;
    if (nome === "") {
        document.getElementById("erroNome").textContent = "O campo nome é obrigatório.";
        valido = false;
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("erroEmail").textContent = "O campo e-mail é obrigatório.";
        valido = false;
    } else if (!regexEmail.test(email)) {
        document.getElementById("erroEmail").textContent = "Digite um e-mail válido.";
        valido = false;
    }
    const idadeNumero = Number(idade);
    if (idade === "") {
        document.getElementById("erroIdade").textContent = "O campo idade é obrigatório.";
        valido = false;
    } else if (isNaN(idadeNumero) || idadeNumero <= 0) {
        document.getElementById("erroIdade").textContent = "A idade deve ser um número maior que zero.";
        valido = false;
    }
    if (senha === "") {
        document.getElementById("erroSenha").textContent = "O campo senha é obrigatório.";
        valido = false;
    } else if (senha.length < 6) {
        document.getElementById("erroSenha").textContent = "A senha deve ter pelo menos 6 caracteres.";
        valido = false;
    }
    if (confirmarSenha === "") {
        document.getElementById("erroConfirmarSenha").textContent = "Confirme sua senha.";
        valido = false;
    } else if (confirmarSenha !== senha) {
        document.getElementById("erroConfirmarSenha").textContent = "As senhas não coincidem.";
        valido = false;
    }
    if (valido) {
        document.getElementById("mensagemSucesso").textContent = "Todos os dados foram preenchidos corretamente!";
    }
});