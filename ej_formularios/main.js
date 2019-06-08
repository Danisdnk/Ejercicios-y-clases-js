let form = document.querySelector("form")
let input = document.querySelector("input")
//CHANGE 
let paises = {
    ar: ["Buenos Aires", "La Pampa"],
    ve: ["Margarita", "caracas"],
    ch: ["Beijing", "Shangai"]

}
form.addEventListener("submit", handleSubmit)
function handleSubmit(e) {
    e.preventDefault()
    /* console.log(input.value) */
    console.dir(form)
    console.dir(e.target[0].value) // para elementos que no tienen valor,si true o false checked
    let nombre = e.target[0].trim().value

    console.dir(nombre.length);

}
/* submit es un evento que se dispara cundo un formulario intenta ser enviado
String,length =>Number - la longitud del string
String.trim() =>String Devuelve strig  pero elimina espacios en blanco para que no cuenten como length  
{String|Array}.indexOf(X) => Number Retorna la posicion de la instancia del elemento X o -1 si no se encuentra
{String|Array}.includes()=> Boolen- retorna verdadero o falso dependiendo si X se encuentra o no 
*/
