function andarPraFrente(){

}
function andarPraDireita(){

}
function andarPraEsquerda(){

}
function andarPraTras(){

}
function correr(){

}
function morder(){


// se for 1 - o inimigo perde a energia
// se for 2 - arranca o pé do inimigo
// se for 3 - arranca o perna do inimigo
// se for 4 - arranca os braços
// se for 5 - arranca a cabeça

// vou criar uma variavel usando o LET
// usando o objeto document representa toda página
// querySelector - #id/.class/tag
let f = document.querySelector("#forca").value
let m = document.querySelector("p")

if(f==1){
    m.innerHTML = "mostro zumbi perdeu energia!"
}else if(f==2){
    m.innerHTML = "mostro zumbi ficou sem os pés!"
}else if(f==3){
    m.innerHTML = "mostro zumbi sem a perna!"
}else if(f==4){
    m.innerHTML = "mostro zumbi sem os braços!"
}else if(f==5){
    m.innerHTML = "mostro zumbi perdeu a cabeça! Morreu!!!"
}

}