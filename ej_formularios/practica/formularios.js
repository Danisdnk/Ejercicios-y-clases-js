//https://drive.google.com/open?id=1mwEiJnFE0wBzEN8XxsMUslHoWzBaPmIj


//Agarrar el formulario
let form = document.querySelector("form")
let nombre = document.querySelector("#nombre")

//1) Seleccionar el <select>
let select = document.querySelector("select")
//2) Asignarle un evento change
select.addEventListener("change", mostrarProv)

let paises = {
    ar: ["Buenos Aires", "La Pampa"],
    ve: ["Margarita", "Caracas"],
    ch: ["Beijing", "Shangai"]
}

function mostrarProv() {
    //3) El callback del change tiene que poder agarrar el valor del select
    let valor = select.value
    //4) Con el valor obtenido, buscar en el objeto "paises" la propiedad que le corresponda
    let provincias = paises[valor]
    console.log(valor)
    console.dir("log provincias" + provincias)

    if (provincias == undefined) {
        console.log("la propiedad no existe");
        let errorText = document.createElement("p")

        //5) Si la propiedad no existe se tiene que ver en pantalla un mensaje que diga "Tiene que seleccionar una opción" en color rojo
        errorText.innerText = "tiene que seleccionar una opción"
        errorText.classList.add("color")

        document.body.appendChild(errorText)
    } else {
        //6) Si la propiedad existe, tenemos que recorrer el array que tiene como valor asociado

        let select = document.createElement("select")
        //        7) Por cada valor del array se tiene que crear un <option>

        for (let index = 0; index < provincias.length; index++) {


            let option = document.createElement("option")

            option.innerText = provincias[index]
            //            8) Agregar todos los <option> creados a un nuevo <select>
            //          9) Agregar el <select> al DOM  

            select.appendChild(option)

        }
        document.body.appendChild(select)

    }


}






//change : Se dispara cuando el control de formlario cambia de valor 


/* 



*/



//Asignarle un evento submit
form.addEventListener("submit", handleSubmit)

//Cancelarle el default
function handleSubmit(e) {
    e.preventDefault()
    //Cualquier cosa que se pueda escribir va a ser el value del input
    let nombre = e.target[0].value
    nombre = nombre.trim()
    console.log(nombre.length)
}




/*
submit : es un evento que se dispara cuando un formulario intenta ser enviado

String.length => Number - La longitud del string

String.trim() => String - Devuelve el mismo string pero sin espacios antes ni despues


{String|Array}.indexOf(X) => Number - Retorna la posicion de la primera instancia del elemento X ó -1 si no se encuentra

{String|Array}.includes(X) => Boolean - Retorna verdadero o falso dependiendo si X se encuentra o no


MAYUSCULAS Y MINUSCULAS
*/
