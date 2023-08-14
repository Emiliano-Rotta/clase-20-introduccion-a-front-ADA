
//.length es lo mismo que decir cuantos elementos tiene un array.


var ejemplo = [
    122,     //0
    "ssf",    // 1
    true,    //2
    false,  //3
    [],    //4
    {}     //5
  
]
var otroEjemplo = [
    "a",     //0
    "b",    // 1
    "c",    //2
    "d",  //3
    "e",     //4
    "f"   // 5

  
]
console.log(ejemplo[5])
console.log(otroEjemplo[0])

if(ejemplo.length > otroEjemplo.length) {
    console.log("es mas grande la variable ejemplo")
} else if(ejemplo.length < otroEjemplo.length) {
    console.log("es mas grande la variable otroEjemplo")
} else {
    console.log("son iguales")
}

// console.log(ejemplo[6])
// console.log(ejemplo.length)
// console.log(otroEjemplo[ejemplo.length - 1])
// console.log(otroEjemplo[7 - 1])
// console.log(otroEjemplo[6])



