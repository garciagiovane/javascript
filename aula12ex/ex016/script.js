function verificar() {
    var anoAtual = new Date().getFullYear();
    var anoDigitado = document.getElementById("txtano");
    var resposta = document.getElementById("resposta");

    if (anoDigitado.value == 0 || anoDigitado.value > anoAtual) {
        alert("Dados inválidos, tente novamente!");
    } else {
        var sexo = document.getElementsByName("radsex");
        var idade = Number(anoAtual) - Number(anoDigitado.value);

        var img = document.createElement("img");
        img.setAttribute("id", "imagem");
        img.style.width = "250px";
        img.style.height = "250px";
        img.style.marginTop = "10px";

        resposta.style.textAlign = "center";

        var genero = "";
        if (sexo[0].checked) {
            genero = "homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/menino.png");
            } else if (idade < 20) {
                img.setAttribute("src", "images/guri.png");
            } else if (idade < 50) {
                img.setAttribute("src", "images/homem.png");
            } else {
                img.setAttribute("src", "images/idoso.png");
            }
        } else if (sexo[1].checked) {
            genero = "mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/menina.png");
            } else if (idade < 20) {
                img.setAttribute("src", "images/guria.png");
            } else if (idade < 50) {
                img.setAttribute("src", "images/mulher.png");
            } else {
                img.setAttribute("src", "images/idosa.png");
            }
        }
        
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resposta.appendChild(img);
    }
}