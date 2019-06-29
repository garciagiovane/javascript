function gerarTabuada() {
    var numero = document.getElementById("txtnumero")
    var select = document.getElementById("seltabuada")

    if (numero.value.length == 0) {
        alert("Por favor insira algum número")    
    } else {
        select.innerHTML = ""
        //select.options.length = 0
        for (let i = 0; i < 10; i++) {
            var option = document.createElement("option")
            option.setAttribute("value", `v${i}`)
            option.innerHTML = `${numero.value} * ${i} = ${(numero.value * i)}`
            select.appendChild(option)
        }
    }    
}