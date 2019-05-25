/* let dos = document.getElementById("item2")
let items= document.getElementsByClassName("item") //devuelve un array de elementos
let lis = document.getElementsByTagName("li") //devuelve un array de elementos
 */
let dos = document.querySelector(".item") //trae lo primero que encuentra 
/* console.dir(dos) */
let p = document.createElement("p")
p.innerText = "Mi Nuevo Texto"
p.id = "nuevo"
p.className = ""
console.log(p)
//Agregar nodos al dom
//nodo.appendChild(NodoNuevo)=>inserta noodo nuevo como ultimo hijo de nodo
//Nodo.insertBefore(NodoNuevo,NodoRef)=>inserta nodo nuevo antes de NodoRef 
let Body = document.querySelector("body")
Body.appendChild(p)
/* 
1)Crear un elemento li y ponerle texto 
2)meterlo como primer item del ul 

1)crear un elemento ul nuevo y vacio 
2)hacer un bucle de 5 iteraciones 
3)Por iteracion de ciclo se tiene que crear un li nuevo
4) agregar todos los li a ul del punto 1
5) agregar el ul del punto 1 al dom  */
