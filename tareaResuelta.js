// Ejercicio 1: Realizar un array que contenga numeros pares del 0 al 20
var par = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Ejercicio 2: realizar un objeto que contga tu nombre, apellido, tu color favorito, comida favorita
var datosdPersonales = {
    nombre:"Emiliano",
    apellido: "Rotta",
    colorFavorito: "Rojo",
    comidaFavorita: "Lasagna"
}

// Ejercicio 3: dado el siguiente array de objetos realizar los ejercicios 

var perros = [
    {
        nombre: "Firulais",
        Raza: "Salchicha",
        edad: 7,
        vacunas: {antiRabica:true, moquillo: false},
        nombreDeLosDueños: ["Jorge", "Marta"]
    },
    {
        nombre: "Negro",
        Raza: "Labrador",
        edad: 3,
        vacunas: {antiRabica:false, moquillo: false},
        nombreDeLosDueños: ["Emilio", "Josefina"]
    },
    {
        nombre: "Alipio",
        Raza: "No tiene",
        edad: 1,
        vacunas: {antiRabica:true, moquillo: true},
        nombreDeLosDueños: ["Carlos", "Clara"]
    },
    {
        nombre: "Manchas",
        Raza: "Dalmata",
        edad: 2,
        vacunas: {antiRabica:false, moquillo: true},
        nombreDeLosDueños: ["Eduardo", "Juan Cruz"]
    }
]


// A) Un console.log que muestre el nombre de todos los perros
console.log(perros[0].nombre, perros[1].nombre, perros[2].nombre, perros[3].nombre)

// B) un console.log que muestre todas las edades sumadas
console.log(perros[0].edad + perros[1].edad + perros[2].edad + perros[3].edad)


// C) un console.log que muestre el nombre de todos los dueños
console.log(
    perros[0].nombreDeLosDueños[0], perros[0].nombreDeLosDueños[1], 
    perros[1].nombreDeLosDueños[0], perros[1].nombreDeLosDueños[1],
    perros[2].nombreDeLosDueños[0], perros[2].nombreDeLosDueños[1], 
    perros[3].nombreDeLosDueños[0], perros[3].nombreDeLosDueños[1]
    )


// D) un console.log que muestre si tiene la vacuna antiRabica
console.log(
    perros[0].vacunas.antiRabica, 
    perros[1].vacunas.antiRabica, 
    perros[2].vacunas.antiRabica, 
    perros[3].vacunas.antiRabica
    )

// for (let i = 0; i < perros.length; i++) {
//     console.log(perros[i].vacunas.antiRabica)
// }