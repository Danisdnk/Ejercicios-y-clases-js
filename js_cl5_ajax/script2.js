//1) creo el objeto xhr 
let xhr = new XMLHttpRequest
//2)abrir/configurar el metodo y la url 
xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
/* xhr.open("GET","usuarios.json") */
//3) asignarle un evento de load
xhr.addEventListener("load", () => {
    //3.1 verificar el exito del pedido
    /* switch (xhr.status) {
        case 200:

            break;

        case 304:

            break;

        case 404:

            break;

    } */
    if (xhr.status = 200) {
        let resultado = JSON.parse(xhr.response);
        console.log(resultado);

        for (let i = 0; i < resultado.length; i++) {
            let p = document.createElement("p")
            p.innerText = resultado[i].name
            document.body.appendChild(p)
        }
    }
})
//4 envio del pedido https://regex101.com/
xhr.send()
