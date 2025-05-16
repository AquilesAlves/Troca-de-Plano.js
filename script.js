function calculaProporcional() {
    const valorAntigo = parseFloat(document.getElementById('valorAntigo').value)
    const valorNovo = parseFloat(document.getElementById('valorNovo').value)
    const vencimento = parseInt(document.getElementById('vencimento').value)
    const dataTroca = parseInt(document.getElementById('dataTroca').value)
    const resultado = (document.getElementById('resultado'))

    let diariaAntigo = valorAntigo/30
    let diariaNovo = valorNovo/30

    let diasPlanoAntigo = 0
    let diasPlanoNovo = 0
    let proporcionalAntigo = 0
    let proporcionalNovo = 0


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

    resultado.style.borderRadius = "15px"
    resultado.style.padding = "15px"
    resultado.style.height = "170px"
    resultado.style.width = "350px"


    resultado.innerHTML = `
    <p><strong>Valor do plano antigo:</strong> R$${(proporcionalAntigo).toFixed(2).replace('.', ',')}</p>
    <p><strong>Valor do plano novo:</strong> R$${(proporcionalNovo).toFixed(2).replace('.', ',')}</p>
    <p><strong>Proporcional total da troca:</strong> R$${(valorTotal).toFixed(2).replace('.', ',')}</p>
    `


}