function mostrarResultado(id, resultado) {
    document.querySelectorAll('.result').forEach(el => el.style.display = 'none');
    let elemento = document.getElementById("resultado" + id);
    elemento.innerHTML = resultado;
    elemento.style.display = 'block';
}

function numerosArmstrong() {
    let resultado = "Números de Armstrong entre 100 e 1000: ";
    for (let num = 100; num < 1000; num++) {
        let soma = 0, temp = num;
        while (temp > 0) {
            let digito = temp % 10;
            soma += digito ** 3;
            temp = Math.floor(temp / 10);
        }
        if (soma === num) resultado += num + " ";
    }
    return resultado;
}

function jogoAdivinhacao() {
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;
    let tentativa;
    do {
        tentativa = prompt("Adivinhe o número (entre 1 e 100):");
        if (tentativa < numeroSorteado) alert("Tente um número maior!");
        else if (tentativa > numeroSorteado) alert("Tente um número menor!");
    } while (tentativa != numeroSorteado);
    return "Parabéns! Você acertou!";
}

function ordenarArray() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(parseInt(prompt("Digite um número:")));
    }
    return "Números ordenados: " + numeros.sort((a, b) => a - b).join(", ");
}

function trianguloPascal() {
    let linhas = 5;
    let resultado = "";
    let triangulo = [[1]];
    for (let i = 1; i < linhas; i++) {
        let linha = [1];
        for (let j = 1; j < i; j++) {
            linha[j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j];
        }
        linha.push(1);
        triangulo.push(linha);
    }
    triangulo.forEach(l => resultado += l.join(" ") + "<br>");
    return resultado;
}

function converterBinario() {
    let num = parseInt(document.getElementById("decimalInput").value);
    let binario = "";
    while (num > 0) {
        binario = (num % 2) + binario;
        num = Math.floor(num / 2);
    }
    return `Binário: ${binario || 0}`;
}