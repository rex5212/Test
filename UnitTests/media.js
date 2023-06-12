function mediaNota(valores){
    let calculoTotal = 0
    let count = 0
    valores.map(valor => {
        calculoTotal += valor
        count++
    })
    let calculamedia = calculoTotal / count
}

function pontuacao(media){
    if (media >= 9 && media <= 10){
        `Sua media final foi ${media} com pontuação SS (Superior)`
    } else if (media >= 7 && media <= 8.9){
       `Sua media final foi ${media} com pontuação MS (Médio Superior)`
    } else if (media >= 5 && media <= 6.9){
        `Sua media final foi ${media} com pontuação MM (Médio)`
    } else if (media >= 3 && media <= 4.9){
        `Sua media final foi ${media} com pontuação MI (Médio Inferior)`
    } else if (media >= 0.1 && media <= 2.9){
        `Sua media final foi ${media} com pontuação II (Inferior)`
    } else if (media == 0){
        `Sua media final foi ${media} com pontuação SR (Sem rendimento)`
    }
}

exports.mediaNota = mediaNota 
exports.pontuacao = pontuacao 