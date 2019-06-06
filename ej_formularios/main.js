let form = document.querySelector("form")
let input = document.querySelector("input")

form.addEventListener("submit", handleSubmit)
function handleSubmit(e) {
    e.preventDefault()
    /* console.log(input.value) */
console.dir(e.target[0].value)
}
/* submit es un evento que se dispara cundo un formulario intenta ser enviado */
