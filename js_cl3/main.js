let a = document.querySelector("a")
a.addEventListener("click", clickDelA)

function clickDelA(e) {
    e.preventDefault()
    let C_div = document.createElement("div")
    let C_p = document.createElement("p")
    let C_btn_Aceptar = document.createElement("button")
    let C_btn_Cancel = document.createElement("button")
    C_div.appendChild(C_p)
    C_div.appendChild(C_btn_Cancel)
    C_div.appendChild(C_btn_Aceptar)
    C_p.innerText = "esta seguro que quiere salir de esta pagina?"
    C_btn_Cancel.innerText = "Cancelar"
    C_btn_Aceptar.innerText = "Aceptar"

    document.body.appendChild(C_div)
    C_div.classList.add("popup")

    C_btn_Cancel.addEventListener("click", NoIrA)
    C_btn_Aceptar.addEventListener("click", IrA)
}
function NoIrA(e) {
    //Event.target = Es una referencia al nodo que acaba de disparar el evento
    //Nodo.parentNode = Es una referencia al nodo padre 
    console.log("click del a")

    document.body.removeChild(e.target.parentNode)
}

function IrA(e) {
    console.log("click del a")
    /*     window.location.href = "http://google.com.ar";
    
    location.href=e.target.href
     */
    window.location.href = a.href;
    document.body.removeChild(e.target.parentNode)
}
/* 1) en el callback de a hacer la siguiente estructura
    < div >
    <p> esta seguro que quiere salir de esta pagina?</p>
    <button>
        aceptar
</button>
    <button>
        cancelar
    </button>

</div >
2) si hace click en aceptar se tiene que redirigir al usuario al href del a
3 si hace click en cancelar se tiene que borrar todo eldiv que contenia el botno*/