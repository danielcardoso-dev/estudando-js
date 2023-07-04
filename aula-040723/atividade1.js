// Escreva um programa queverifique se um número é par ou ímpar.
let num = 5;
let condicao = (num % 2) == 0; // é par
let mensagem = condicao? "Este número é par" : "Este número é ímpar";
//console.log(mensagem);

// Faça um programa que calcule a média aritmética de três números.
let n1 = 8;
let n2 = 3;
let n3 = 5;
let media = (n1 + n2 + n3) / 3;
//console.log("A média é igual a");
//console.log(media)

// Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.
let num2 = 20;
let condicao2 = ((num2 % 3) == 0) && ((num2 % 5) == 0)
let mensagem2 = condicao2 ? "É divisivel por 3 e 5." : "Não é divisível por 3 e 5.";
//console.log(mensagem2);

//Faça um programa que calcule a área de um triângulo com base e altura.
let base = 5;
let altura = 8;
let area = (base * altura) / 2;
console.log("A area do triang. com base 4 e altura 8 é");
//console.log(area);

// Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.
let tempCelsius = 36;
let tempFahrenheit = tempCelsius * 1.8 + 32; //F = C * 1,8 + 32
//console.log("Celsius");
//console.log(tempCelsius);
//console.log("Fahrenheit");
//console.log(tempFahrenheit);

//Faça um programa que calcule o delta das funções de segundo grau.
// Delta = b^2 -4 * a * c
let a = 3;
let b = 2;
let c = 1;

let delta = b**2 - 4 * a * c;
//console.log("O valor de delta é");
//console.log(delta);


// Faça um programa que retorna se uma determinada pessoa poide dirigir baseado na sua odade (utilize operadores trinários)
let idade = 24
let mensagem3 = (idade >= 18) ? "Pode tirar carteira de motorista." : "Não pode tirar carteira de motorista"
console.log(mensagem3);




