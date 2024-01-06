const painel = document.querySelector('.painel')
const aviso = document.querySelector('.aviso')
let op = document.querySelector('.operador')


function clean(){
    painel.textContent = ''
}
function inserir(num){
    let numero = painel.textContent
    painel.textContent = numero + num
}
function sinal(){
    let numero = parseFloat(painel.textContent)
    isNaN(numero) ? aviso.textContent = 'insira um numero para esta operação' : painel.textContent = numero*(-1)
}

function calcular(){
    let calculo = painel.textContent
    calculo = calculo.includes('÷') ? calculo.replace('÷', '/') : calculo
    calculo = calculo.includes('×') ? calculo.replace('×', '*') : calculo
    painel.textContent = eval(calculo)
}
