/* 
Tipos de datos:
PRIMITIVOS: 
string:"" o ''
number:1, 0.1 , -3
boolean:true false
undefined: una variable sin valor por defecto vale undefined
null
OBJETOS:
Object: {}
Array: []
Function 
VARIABLES: var - let- const
los nombres de una variable pueden arrancar con _ $ o cualquier letra 
*/
let nombre = "Horacio"
let apellido = "gutierrez"
let nombre_completo = nombre + " " + apellido
//console.log(x);  nos muestra en consola lo que valga X 
let number = [0, 2, 3, 4, 5, 6, 10, "Horacio", true]
/* number.push("hola")
number.push(45) */
/* console.log(number["length"]);
console.log(number.length); */
/* console.table(number) */
// asignacion con "=" con dos puntos : es propiedad
let persona = {
    candela: {
        nombre: "candela",
        edad: 29,
        vive: true
    },
    
    horacio: {
        nombre: "Horacio",
        edad: 29,
        vive: true
    }
}
/* persona.candela.trabaja = false
persona.tienePerrito = 3
 */console.log(persona);
//estructuras de control: condicionales- bucles/ciclos
//sirve para iterar sobre matrices indexadas secuenciales,osea un array
for (let index = 0; index < number.length; index++) {
    console.log(number[index]);
    
}
//for in sirve para iterar matrices indexadas asociativas, osea un objeto 
for(prop in persona){
console.log(prop)
}