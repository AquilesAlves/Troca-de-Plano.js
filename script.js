//calcula quando aperta o botão
function calculaProporcional() {
    let valorAntigo = parseFloat(document.getElementById('valorAntigo').value)
    let valorNovo = parseFloat(document.getElementById('valorNovo').value)
    const vencimento = parseInt(document.getElementById('vencimento').value)
    const dataTroca = parseInt(document.getElementById('dataTroca').value)
    const msg1 = document.getElementById('msg1')
    const msg2 = document.getElementById('msg2')

    //valor diario de cada plano
    let diariaAntigo = valorAntigo/30
    let diariaNovo = valorNovo/30

    //declaração de variaveis
    let diasPlanoAntigo = 0
    let diasPlanoNovo = 0
    let proporcionalAntigo = 0
    let proporcionalNovo = 0

    //if else para fazer o calculo
    if (dataTroca > vencimento) {
        diasPlanoAntigo = dataTroca - vencimento
        diasPlanoNovo = vencimento - dataTroca + 30

        proporcionalAntigo = diariaAntigo * diasPlanoAntigo
        proporcionalNovo = diariaNovo * diasPlanoNovo

    } else {
        diasPlanoAntigo = dataTroca - vencimento + 30
        diasPlanoNovo = vencimento - dataTroca 

        proporcionalAntigo = diariaAntigo * diasPlanoAntigo
        proporcionalNovo = diariaNovo * diasPlanoNovo
    }
    let valorTotal = proporcionalAntigo + proporcionalNovo

    //formatar a casa decimal e a virgula
    valorAntigo = (valorAntigo).toFixed(2).replace('.', ',')
    valorNovo = (valorNovo).toFixed(2).replace('.', ',')
    valorTotal = (valorTotal).toFixed(2).replace('.', ',')
    proporcionalAntigo = (proporcionalAntigo).toFixed(2).replace('.', ',')
    proporcionalNovo = (proporcionalNovo).toFixed(2).replace('.', ',')
    
    //configurar o tamanho da região
    msg1.style.borderRadius = "15px"
    msg1.style.padding = "15px"
    msg1.style.height = "100px"
    msg1.style.width = "350px"
    msg1.innerHTML = `
        <p>Calculando o proporcional da troca de plano ficará o valor de R$${valorTotal} para o dia ${vencimento}, e as próximas faturas passarão para o novo valor do seu plano que é R$${valorNovo}. Posso seguir com troca de plano?</p>
    `
    document.getElementById('copy1').style.display = 'block'     //faz aparecer o botao


    msg2.style.borderRadius = "15px"
    msg2.style.padding = "15px"
    msg2.style.height = "100px"
    msg2.style.width = "350px"
    msg2.innerHTML = `
        Cliente solicitou a troca do plano
        Proporcional de ${diasPlanoAntigo} dias do plano antigo R$${proporcionalAntigo}
        e ${diasPlanoNovo} dias do plano novo R$${proporcionalNovo}
        Ciente do novo valor R$${valorNovo}
    `
    document.getElementById('copy2').style.display = 'block'

}

function copiar1() {
    navigator.clipboard.writeText(document.getElementById('msg1').innerText)
}

function copiar2() {
    navigator.clipboard.writeText(document.getElementById('msg2').innerText)
}