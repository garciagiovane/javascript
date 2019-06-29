function calcular() {
    var inputVelocidade = document.querySelector("input#txtvel");
    var velocidade = Number(inputVelocidade.value);

    var divResultado = document.querySelector("div.resultado");
    divResultado.innerHTML = `<p>Velocidade ${velocidade}</p>`;
    if (velocidade > 60) {
        divResultado.innerHTML += `<p>Velocidade ${velocidade}</p>
        <p><strong>Você foi multado</strong></p>`;
    }
    divResultado.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`;
}