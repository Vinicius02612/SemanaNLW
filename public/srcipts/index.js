const some = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")


//A pagina some quando o usuario clicar em fechar
some.addEventListener("click", () => {
    modal.classList.remove("hide")
})

//E  aparece quando o usario clicar em pesquisar
close.addEventListener("click", () => {
    modal.classList.add("hide")
})