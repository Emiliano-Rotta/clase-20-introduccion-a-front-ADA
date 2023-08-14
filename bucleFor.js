// //ubicacion es: 0   1    2     3   4   5
// var ejemplo = [10, 15, 44, 88, 572, 810]

// console.log(ejemplo.length) // --> 7
// console.log("--------------------")

// // for (let i = 0; i < ejemplo.length; i++) {
// //     console.log(ejemplo[i])
// // }


// for (let i = 0; i < ejemplo.length; i++) {
//     console.log(ejemplo[i])   
// }

// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:
var obtenerNumeroMenor = [5, 7, 99, 34, 54, 2, 12] // 2

var acumuladora = obtenerNumeroMenor[0]

for (let i = 0; i < obtenerNumeroMenor.length; i++) {
    if (acumuladora > obtenerNumeroMenor[i]){
        acumuladora = obtenerNumeroMenor[i]
    }
}
console.log(acumuladora)



// var acumuladora = obtenerNumeroMenor[0]

// if (acumuladora > obtenerNumeroMenor[1]){
//     acumuladora = obtenerNumeroMenor[1]
// }
// if (acumuladora > obtenerNumeroMenor[2]){
//     acumuladora = obtenerNumeroMenor[2]
// }
// if (acumuladora > obtenerNumeroMenor[3]){
//     acumuladora = obtenerNumeroMenor[3]
// }
// if (acumuladora > obtenerNumeroMenor[4]){
//     acumuladora = obtenerNumeroMenor[4]
// }
// if (acumuladora > obtenerNumeroMenor[5]){
//     acumuladora = obtenerNumeroMenor[5]
// }
// if (acumuladora > obtenerNumeroMenor[6]){
//     acumuladora = obtenerNumeroMenor[6]
// }
// console.log(acumuladora)


///
// var menor = [5, 3, 4]

// var acc = menor[0]

// if(acc > menor[1]){
//     acc = menor[1]
// }
// if(acc > menor[2]){
//     acc = menor[2]
// }
// console.log(acc)
