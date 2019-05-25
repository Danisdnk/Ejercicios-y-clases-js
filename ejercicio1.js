/* 1)Crear un elemento li y ponerle texto 
2)meterlo como primer item del ul 

1)crear un elemento ul nuevo y vacio 
2)hacer un bucle de 5 iteraciones 
3)Por iteracion de ciclo se tiene que crear un li nuevo
4) agregar todos los li a ul del punto 1
5) agregar el ul del punto 1 al dom  */
let ElementoLi = document.createElement("li")
ElementoLi.innerText = "nuevo texto"
let ElementoUl = document.querySelector("ul")
ElementoUl.appendChild(ElementoLi)


let NuevoUl = document.createElement("ul")

for (let index = 0; index < 5; index++) {
    let NuevoLi = document.createElement("li")
    NuevoLi.innerText = "nuevo texto " + [index]
    NuevoUl.appendChild(NuevoLi)

}
let Body = document.querySelector("body")
Body.appendChild(NuevoUl)