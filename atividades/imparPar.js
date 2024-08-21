const num1 = 9
const num2 = 4
const num3 = 7

console.log("VERIFICAÇÃO DE NÚMEROS PARES OU ÍMPARES")

//numero 1 _____________________
if(par(num1)){
    console.log("O NÚMERO",num1,"É PAR")
}
else{
    console.log("O NÚMERO",num1,"É IMPAR")
}
//numero 2 _____________________
if(par(num2)){
    console.log("O NÚMERO" ,num2,"É PAR")
}
else{
    console.log("O NÚMERO" ,num2,"É IMPAR")
}
//numero 3 _____________________
if(par(num3)){
    console.log("O NÚMERO" ,num3,"É PAR")
}
else{
    console.log("O NÚMERO" ,num3,"É IMPAR")
}

//FUNÇÃO
function par(verify){
    if(verify % 2 === 0){
    return true;
    }
}