let numeros = []

function adicionar() {
    limparResposta()
    let numero = document.getElementById("txtnumero")
    let select = document.getElementById("selnumero")

    if (!validarNumero(numero.value) || numero.value.length == 0 || procurarNaLista(numero.value, numeros)) {
        alert("Valor inválido ou já encontrado na lista!")
    } else {
        numeros.push(numero.value)
        let option = document.createElement("option")
        option.setAttribute("value", `num${numero.value}`)
        option.innerHTML = `Valor ${numero.value} adicionado.`
        select.appendChild(option)
    }
    numero.value = ""
    numero.focus()
}

function validarNumero(num) {
    if (num > 0 && num < 101) {
        return true
    }
    return false
}

function procurarNaLista(num, lista) {
    if (lista.includes(num)) {
        return true
    }
    return false
}

function finalizar() {

    if (calcularPosicoes() == 0) {
        alert("Adicione um valor antes de finalizar!")
    } else {
        let resposta = document.getElementsByClassName("resposta")[0]
        resposta.innerHTML = `<p>Ao todo, temos ${calcularPosicoes()} números cadastrados.</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${calcularMaiorValor()}</p>`
        resposta.innerHTML += `<p>O menor valor infomado foi ${calcularMenorValor()}</p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${somar()}</p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${calcularMedia()}</p>`
    }
}

function calcularPosicoes() {
    return numeros.length
}

function calcularMaiorValor() {
    numeros.sort()
    return numeros[numeros.length - 1]
}

function calcularMenorValor() {
    numeros.sort()
    return numeros[0]
}

function somar() {
    let total = 0
    numeros.forEach(numero => {
        total += Number(numero)
    });
    return total
}

function calcularMedia() {
    return somar() / numeros.length
}

function limparResposta() {
    let resposta = document.getElementsByClassName("resposta")[0]
    resposta.innerHTML = ""
}