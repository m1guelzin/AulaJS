// Definindo limite estático
const limit = 20;

console.log("Exibindo os números primos ate:",limit)
for(let i=2; i<=limit; i++){
    if(primos(i)){
        console.log(i);
    }
}
// Criando a função para verificar se um número é ou não é primo
function primos(num){
    for(let i=2; i<= Math.sqrt(num); i++) {
        if(num % i === 0){
            return false; /*Se um numero(num) é divisivel por qualquer numero(i) entre 2 e a raiz
quadrada deste numero(num), entao(num) não é primo. */
        }
    }
return true;// Se for primo, retorna True
}