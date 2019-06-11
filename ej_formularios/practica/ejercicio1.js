//1 - Tener un elemento con que laburar
let btn = document.querySelector("button")

//El body es uno de los nodos que no hace falta seleccionar para usarlo ya que esta en document.body
//let body = document.querySelector("body")

//2 - A ese elemento le asigno un evento
btn.addEventListener("click",hacerClick)
//3 - Tener el callback disponible
function hacerClick(){

    let p = document.createElement("p")
    let btn_nuevo = document.createElement("button")
    let div = document.createElement("div")

    p.innerText = "Lorem Ipsum"
    btn_nuevo.innerText = "Borrar"
    btn_nuevo.addEventListener("click",borrarElemento)

    div.appendChild(p)
    div.appendChild(btn_nuevo)
    document.body.appendChild(div)
}


//Objeto Evento : Es un objeto que te llega como primer parametro de cualquier funcion(callback) registrada en un evento
function borrarElemento(e){
    //Event.target = Es una referencia al nodo que acaba de disparar el evento
    //Nodo.parentNode = Es una referencia al nodo padre 
    document.body.removeChild(e.target.parentNode)
}