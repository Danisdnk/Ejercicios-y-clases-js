let btn = document.querySelector(".style_btn")
let body = document.querySelector("body")
btn.addEventListener("click", hacerClick)
let contador = 1

function hacerClick() {
    let Nuevo_btn = document.createElement("button")
    Nuevo_btn.innerText = "boton " + contador
    document.body.appendChild(Nuevo_btn)
    Nuevo_btn.addEventListener("click", UnaMismaFuncionParaTodosLosBotones)
    contador = contador + 1

}
function UnaMismaFuncionParaTodosLosBotones() {
    console.log("Click en alguno de los botones");
}

//var hacerclick = function(){ }
//windows.hacerclick =function(){}
/*

reemplazar el codigo de la funcion hacerclick por
1)crear un boton por cada click que se haga
2) cada boton nuevo se tiene que ver en el dom
3) cada boton nuevo tiene que tener un callback en su propio evento click tambien<cual es el evento para trabajar,cual es el callback de ese evento (nodo,evento,callback)
4 todos los botones en pantalla tienen que tener como teto "botno n" donde N es un numero arrancando de 1 el cual se va aumentando de una unidad */