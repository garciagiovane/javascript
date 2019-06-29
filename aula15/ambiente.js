var carros = ["gol", "bmw", "mercedes"]

carros.forEach(carro => {
    console.log(carro)
});

console.log(carros[0])

let vetor = []
vetor.push("teste1")
vetor.push("teste2")
vetor.push("teste5")
vetor.push("teste6")
vetor.push("teste4")
vetor.sort()

for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}

vetor.forEach(z => {
    console.log(z)
})

if (vetor.indexOf("teste11") == -1) {
    console.log("O valor não foi encontrado no array, em Js, -1 significa que não foi encontrado")
}

for (const z in vetor) {
    if (vetor[z].match("teste6")) {
        console.log(`A posição ${z} do array vetor tem o valor ${vetor[z]}`)
    }    
}

console.log(`Tamanho do array vetor ${vetor.length}`)
console.log(vetor)

console.log(vetor.indexOf("teste6"))