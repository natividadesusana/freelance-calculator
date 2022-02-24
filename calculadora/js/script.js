let inputSalario = document.querySelector('#ganho-mes');
let inputHoras = document.querySelector('#horas-dia');
let resultado = document.querySelector('#resposta');

function calcularValorHora() {
    let salario = inputSalario.valueAsNumber;
    let horas = inputHoras.valueAsNumber;
    let diasUteisMes = 22;
    let horasMes = horas * diasUteisMes;
    let valorHora = salario / horasMes;
    let valorDuasCasas = valorHora.toFixed(2);
    resultado.textContent = 'R$' + valorDuasCasas;
}