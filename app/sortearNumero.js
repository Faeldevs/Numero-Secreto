const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroRandom ()

function gerarNumeroRandom(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log ("Numero secreto" , numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor