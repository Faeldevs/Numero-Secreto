function verificarChute(chute){ //verificarChute esta em reconhecumentoVoz.js
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido, tente um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (chuteMaiorMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido, só é aceito número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>DICA: O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>DICA: O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero) 
}

function chuteMaiorMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click' , e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
