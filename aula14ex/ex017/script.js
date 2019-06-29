function contar() {
    var inicio = document.getElementById("txtinicio");
    var fim = document.getElementById("txtfim");
    var passo = document.getElementById("txtpasso");
    var resposta = document.getElementById("resposta");

    if (inicio.value.length == 0) {
        resposta.innerHTML = "Impossível contar!";
    } else {
        var loop = Number(inicio.value);
        var fimLoop = Number(fim.value);
        var passoValue = Number(passo.value);

        if (passo.value <= 0 || passo.value.length == 0) {
            alert("Passo inválido, considerando passo 1.")
            passoValue = 1;
        }

        resposta.innerHTML = "Contando...";
        if (loop <= fimLoop) {
            while (loop <= fimLoop) {
                resposta.innerHTML += `${loop} ${String.fromCodePoint(0x1F449)}`;
                loop += passoValue;
            }    
        } else {
            while (loop >= fimLoop) {
                resposta.innerHTML += `${loop} ${String.fromCodePoint(0x1F449)}`;
                loop -= passoValue;
            }
        }
        
        resposta.innerHTML += "🏁";
    }
}