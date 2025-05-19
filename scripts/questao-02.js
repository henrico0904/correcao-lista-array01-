const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27]
let numerosPar = 0
let numerosImpar = 0
let maiorQue20 = 0
//verredura do array
for (let i = 0; i < numeros.length; i++) {
    //condicional numeros par
    if(numeros[i] % 2 == 0){
        numerosPar ++
    } else{
        numerosImpar ++
    }
    //Condicional para maiores que 20
    if(numeros[i] > 20){
        maiorQue20 ++

    }
}
//numerosImpar = numeros.length - numerosPar

console.log(`a quantidade de números pares é: ${numerosPar}`)
console.log(`a quantidade de números impares é: ${numerosImpar}`)
console.log(`a quantidade de números maiores que 20 é: ${maiorQue20}`)
