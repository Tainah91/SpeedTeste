function somar(){
    
    const numx = Number.parseInt(document.getElementById ("numx").value)
    
    const numy = Number.parseInt(document.getElementById ("numy").value)
    
    const resultado = numx + numy;
    document.getElementById ('resultado').textContent = resultado


}

function subtrair(){

               
    const numx = Number.parseInt(document.getElementById ("numx").value)
   
    const numy = Number.parseInt(document.getElementById ("numy").value)
    
    const resultado = numx - numy;
    document.getElementById ('resultado').textContent = resultado

   
}

function multiplicar(){

             
    const numx = Number.parseInt(document.getElementById ("numx").value)
    
    const numy = Number.parseInt(document.getElementById ("numy").value)

    const resultado = numx * numy;
    document.getElementById ('resultado').textContent = resultado 

}
function dividir(){

               
    const numx = Number.parseInt(document.getElementById ("numx").value)

    const numy = Number.parseInt(document.getElementById ("numy").value)

    const resultado = numx / numy;
    document.getElementById ('resultado').textContent = resultado


}

function obterResto(){
    const numx = Number.parseInt(document.getElementById("numx").value)

    const numy = Number.parseInt(document.getElementById("numy").value)
    
    const resultado = numx % numy;
    document.getElementById ('resultado').textContent = resultado
}