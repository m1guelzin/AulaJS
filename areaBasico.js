//Criando uma constante
const PI = 3.14159;

//criando uma variavel
var radius = 5

function calculatedArea(radius) {
   // Definindo uma variavel como let 
   let area;
   // Calculando a área
   area = PI * radius * radius
   return area;
}

var calculatedArea = calculatedArea(radius)

console.log("O raio é igual a: "+radius);
console.log("A área do circulo é:",calculatedArea)
