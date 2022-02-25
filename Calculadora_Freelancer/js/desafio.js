let inputValorHoras = document.querySelector('#valor-hora');
let inputHorasProjeto = document.querySelector('#horas-projeto');
let resposta = document.querySelector('#resposta');

function calcular() {
    let valorHoras = inputValorHoras.valueAsNumber;
    let horasProjeto = inputHorasProjeto.valueAsNumber;
    let horasTrabalhadas = valorHoras * horasProjeto;
    resposta.textContent = 'R$' + horasTrabalhadas.toFixed(2);
}