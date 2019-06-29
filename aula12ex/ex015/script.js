function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora < 12) {
        alterarCor("#e2cd9f");
        img.src = "images/manha.png";
    } else if (hora < 18) {
        alterarCor("#b9846f");
        img.src = "images/tarde.png";
    } else {
        alterarCor("#515154");
        img.src = "images/noite.png";
    }
}

function alterarCor(cor) {
    document.body.style.background = cor;
}