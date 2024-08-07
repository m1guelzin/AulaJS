const prompt = require('prompt-sync')();


let numero1 = parseFloat(prompt("Digite o primeiro valor: "))
let numero2 = parseFloat(prompt("Digite o segundo valor: "))
let numero3 = parseFloat(prompt("Digite o terceiro valor: "))

var soma = numero1+numero2+numero3
var media = soma/3

console.log('A média dos números é inseridos é',media)
