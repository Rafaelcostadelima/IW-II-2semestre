function nota(nota) {
    if (nota >= 6 && nota <= 10) {
        alert("Aluno aprovado!!");
    } else if (nota < 6 && nota >= 0) {
        alert("Aluno reprovado!");
    } else {
        alert("Erro: número deve estar entre 0 e 10");
    }
}
