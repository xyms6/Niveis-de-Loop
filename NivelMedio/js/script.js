function mostrarResultado(id, resultado) {
    document.querySelectorAll('.result').forEach(el => el.style.display = 'none');
    let elemento = document.getElementById("resultado" + id);
    elemento.innerHTML = resultado;
    elemento.style.display = 'block';
}

function tabuada() {
    let num = document.getElementById("tabuadaInput").value;
    let resultado = `Tabuada do ${num}: <br>`;
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i} <br>`;
    }
    return resultado;
}

function somaImpares() {
    let soma = 0;
    for (let i = 1; i <= 100; i += 2) {
        soma += i;
    }
    return `Soma dos ímpares de 1 a 100: ${soma}`;
}

function calcularFatorial() {
    let num = document.getElementById("fatorialInput").value;
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial *= i;
    }
    return `Fatorial de ${num}: ${fatorial}`;
}

function fibonacci() {
    let a = 0, b = 1, resultado = "Sequência de Fibonacci: ";
    let sequencia = [a, b];
    while (sequencia.length < 10) {
        let proximo = a + b;
        sequencia.push(proximo);
        a = b;
        b = proximo;
    }
    return resultado + sequencia.join(", ");
}

function contarVogais() {
    let palavra = document.getElementById("vogaisInput").value.toLowerCase();
    let vogais = "aeiou";
    let contador = 0;
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return `A palavra '${palavra}' tem ${contador} vogais.`;
}