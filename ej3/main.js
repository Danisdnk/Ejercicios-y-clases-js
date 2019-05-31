let btn_padre = document.querySelector(".btn_padre")
let body = document.querySelector("body")

btn_padre.addEventListener("click", CrearBotones)



function CrearBotones() {
    let btn_contenido = document.createElement('div')
    let parrafo = document.createElement("p")
    let boton_borrar = document.createElement("button")
/*     btn_contenido.innerHTML = '<p>lorem ipsum</p><button class="btn_borrar">borrar</button>'
 */
    parrafo.innerText = "lorem ipsum" 
    boton_borrar.innerText = "borrar"
    body.appendChild(btn_contenido)
    btn_contenido.classList.add("hijos");
   
    btn_contenido.appendChild(parrafo)
    btn_contenido.appendChild(boton_borrar)
    boton_borrar.addEventListener("click", BorrarDiv)

   
    function BorrarDiv() {
        btn_contenido.removeChild(parrafo)
        console.log("quiso borrar");


    }
    
}


/* function CrearBotones() {
    btn_contenido = document.createElement('div')
    let btn_borrar = document.querySelector(".btn_borrar")

    btn_contenido.classList.add("hijos");
    btn_contenido.innerHTML = '<p>lorem ipsum</p><button class="btn_borrar">borrar</button>'

    btn_borrar.addEventListener("click", BorrarDiv)

    document.body.appendChild(btn_contenido)
    console.log("hizo click");

}

function BorrarDiv() {
    btn_contenido.classList.remove("p");
    console.log("quiso borrar");

} */