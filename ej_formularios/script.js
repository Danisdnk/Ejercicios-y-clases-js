let form = document.querySelector("form")
let input = document.querySelector("input")

//1)selecciona el <select>
let select = document.querySelector("select")

//2) Asignarle un evento change
select.addEventListener("change", SeleccionCallback)

//CHANGE 
let paises = {
    ar: ["Buenos Aires", "La Pampa"],
    ve: ["Margarita", "caracas"],
    ch: ["Beijing", "Shangai"]

}
/* form.addEventListener("submit", handleSubmit)

3 el callback tiene que agarrar el valor del select

 */function SeleccionCallback(e) {
    e.preventDefault()
    /* console.log(input.value) */
    /* console.dir(form) */
    console.dir(e.target[0].value)
    console.dir(select.value)
  
  
    let valor = select.selectedIndex
    console.dir(valor)

    if (valor == paises[index]) {
        console.log("es argentina")

    }
    /* 

    paises.forEach( value => {
        console.log(value)
    
    
    }); */


}
/* submit es un evento que se dispara cundo un formulario intenta ser enviado
String,length =>Number - la longitud del string
String.trim() =>String Devuelve strig  pero elimina espacios en blanco para que no cuenten como length

4) con el valor obtenido buscar el objeto "paises" de la propiedad que le corresponda
5 si la propiedad no existe se tiene que ver en pantalla un mensaje que diga "tiene que seleccionar un opcion" en color rojo
6) Si la propiedad existe,tenemos que recorrer el array qye tiene como valor asociado
7 por cada valor del array se tiene que crear un <option>
8) arrgegr todos los <option> creados a un nuevo <select>
9 agregar el select al domZ */