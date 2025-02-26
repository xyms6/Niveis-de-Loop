function mostrarResultado(id, resultado) {
    document.querySelectorAll('.result').forEach(el => el.style.display = 'none');
    let elemento = document.getElementById("resultado" + id);
    elemento.innerHTML = resultado;
    elemento.style.display = 'block';
}

function contagemSimples() {
    let resultado = "1. Contagem Simples: ";
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ";
    }
    return resultado;
}

function numerosPares() {
    let resultado = "2. Números Pares até 20: ";
    for (let i = 2; i <= 20; i += 2) {
        resultado += i + " ";
    }
    return resultado;
}

function contagemRegressiva() {
    let resultado = "3. Contagem Regressiva: ";
    let j = 10;
    while (j >= 1) {
        resultado += j + " ";
        j--;
    }
    return resultado;
}

function somaNumeros() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        soma += i;
    }
    return "4. Soma de 1 a 5: " + soma;
}

function multiplosDeTres() {
    let resultado = "5. Múltiplos de 3 até 15: ";
    for (let i = 3; i <= 15; i += 3) {
        resultado += i + " ";
    }
    return resultado;
}