const tamanho = 10;
//VARIAVEL ARRAY
let numeros = [4,60,14,9,100,1,82,7,5,11];

for(let i = 0; i < numeros.length; i++){
    let num = numeros[i];

if (num % 2 === 0){
    console.log('O número '+num+ ' é par')
}
else {
    console.log('O número '+num+ ' é impar')
}
}