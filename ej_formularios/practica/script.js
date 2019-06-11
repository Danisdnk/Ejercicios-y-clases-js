/* 
POR VALOR
let a = 1
let b = a
b = 10
console.log(b,a)


POR REFERENCIA
let obj = {x:1}
let copia = obj
copia.x = 10
console.log(obj,copia) 
*/
let btn = document.querySelector("button")
//Evento : La ejecución de una funcion(callback) como respuesta a una acción
//https://developer.mozilla.org/en-US/docs/Web/Events
//Nodo.addEventListener(evento,callback)

// ESTO SE LEE : "A la etiqueta que acabo de seleccionar en la variable btn quiero registrarle un callback que esta en la variable hacerClick el cual se va a ejeuctar cada vez que el evento "click" se dispare 
btn.addEventListener("click",hacerClick)

//https://i.imgur.com/lOal4fL.jpg
    

//window.hacerClick = function(){}
//var hacerClick = function(){}
let contador = 1
function hacerClick(){
    //1) Crear un boton por cada click que se haga
    let nuevo = document.createElement("button")
    //4) Todos los botones en pantalla tienen que tener como texto "Boton N" , donde N es un numero arrancando de 1 el cual se va aumentando de a una unidad
    nuevo.innerText = "Boton " + contador

    //3) Cada boton nuevo tiene que tener un callback en su propio evento click también
    nuevo.addEventListener("click",unaMismaFuncionParaTodosLosBotones)

    //2) Cada boton nuevo se tiene que ver en el DOM
    let body = document.querySelector("body")
    body.appendChild(nuevo)

    contador = contador + 1
}


function unaMismaFuncionParaTodosLosBotones(){
    console.log("Click de alguno de los botones!")
}

//Eventos Default : Son comportamientos con los que ya vienen algunos nodos en determinados eventos
let a = document.querySelector("a")

a.addEventListener("click",clickDelA)

function redirigir(){
    location.href = a.href
}

function borrarElemento(e){
    document.body.removeChild(e.target.parentNode)
}

function clickDelA(e){
    e.preventDefault()
    
    let div = document.createElement("div")
    let p = document.createElement("p")
    let aceptar = document.createElement("button")
    let cancelar = document.createElement("button")

    //div.className = "popup"
    div.classList.add("popup")
    //Nodo.classList.add()
    //Nodo.classList.remove()
    //Nodo.classList.toggle()


    p.innerText = "Esta seguro que quiere salir de esta pagina?"
    aceptar.innerText = "Aceptar"
    aceptar.addEventListener("click",redirigir)
    //aceptar.id = "aceptar"
    cancelar.innerText = "Cancelar"
    cancelar.addEventListener("click",borrarElemento)
    //cancelar.id = "cancelar"

    div.appendChild(p)
    div.appendChild(aceptar)
    div.appendChild(cancelar)

    document.body.appendChild(div)
    //Event.preventDefault() : Detiene el comportamiento por default de cualquier nodo
    console.log("click del a!")
}

