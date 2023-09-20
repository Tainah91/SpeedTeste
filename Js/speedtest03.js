function Gorjeta(){
   
    let nomeGarcom = document.getElementById("garcom").value;
    let numeroMesa = document.getElementById("mesa").value;
    let numeroComanda = document.getElementById("comanda").value;
    let valorTotal = document.getElementById("valorTotal").value;

    let gorjeta = valorTotal* 0.10
    localStorage.setItem("garcom",nomeGarcom)
    localStorage.setItem("mesa",numeroMesa)
    localStorage.setItem("comanda",numeroComanda)
    localStorage.setItem("valorTotal",valorTotal)
    localStorage.setItem("gorjeta",gorjeta)
    
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `Garcom: ${nomeGarcom}<br>Mesa: ${numeroMesa}<br>
    Comanda: ${numeroComanda}<br>Gorjeta: R$ ${gorjeta.toFixed(2)}`;
    
}