let a = 12
let b = 10
let c = 8
let valorPotencia = 3
let valorRaiz = 2

//usei let para que caso eu precise deixar a equação de uma maneira na qual o cliente possa escolher os valores 

const soma = `A soma dos valores citados é igual a ${a+b}`

const subtracao = `A subtração dos valores citados é igual a ${a-b}`

const multiplicacao = `A multiplicação dos valores citados é igual a ${a*b}`

const divisao = `A divisão dos valores citados é igual a ${a/b}`

const potencia = `a potencia do valor citado é igual a ${Math.pow(c, valorPotencia)}`

const raiz = `a raiz quadrada do valor citado é igual a ${Math.sqrt(valorRaiz)}`

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(potencia)
console.log(raiz)

// Achei mais descritivo citar separadamente cada equação.