function somar(n1, n2) {
    return n1 + n2
}
console.log(somar(5, 3))

function somarOpcional(n1 = 0, n2 = 0) {
    return n1 + n2
}
console.log("Função com parâmetros opcionais: " + somarOpcional(2))

let v = function subtrair(n) {
    return n - 2
}
console.log(v(5))

function fatorar(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorar(5))

/* Recursividade */
function fatorarRecursao(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorarRecursao(n -1)
    }
}
console.log(fatorarRecursao(5))