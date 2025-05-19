const temperaturasCelcius = [0, 10, 20, 30, 40]
const temperaturasFahreinheit = []
let contadorArrayFahreinheit = 0;


//varredura do array
for (let i = 0; i < temperaturasCelcius.length; i++) {
    temperaturasFahreinheit[contadorArrayFahreinheit] = (temperaturasCelcius[i] * 9/5) + 32;
    contadorArrayFahreinheit ++

}
console.table(temperaturasCelcius)
console.table(temperaturasFahreinheit)
