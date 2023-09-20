document.addEventListener("DOMContentLoaded",function(){
    escreverMensagem()
})


function escreverMensagem(){
    let nome = localStorage.getItem("nome")
    let resp = document.querySelector("p")
    resp.innerHTML = `Seja bem vindo ${nome} a luta do século`

}