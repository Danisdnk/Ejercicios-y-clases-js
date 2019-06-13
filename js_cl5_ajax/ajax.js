let xhr = new XMLHttpRequest
xhr.addEventListener("readystatechange", cambioDeEstado)
xhr.addEventListener("load", termino)
xhr.open("GET", "info.txt")
//http://127.0.0.1:5500/index.html
xhr.send()
console.log(xhr)

function cambioDeEstado() {
    console.log(xhr)
}
function termino() {
    if (xhr.status == 200) {
        console.log(xhr.response);
    }
}
