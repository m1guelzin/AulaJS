let numbers = [1,2,3,4,5,6,7,8,9,10,99,75,86,30];

// Estrutura de repetição usando forEach

numbers.forEach(num =>{
    if(num % 2 === 0){
        console.log("O número", num, "é PAR")
    }
    else{
        console.log("O número", num, "é IMPAR")
    }
});
    