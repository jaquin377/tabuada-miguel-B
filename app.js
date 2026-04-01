const select = document.getElementById("select")
const button = document.getElementById("button") 
const resultado = document.getElementById("resultado")

            function gerarTabuada(){
    const tabuada = select.value
    let n = 0 
    while(n <= 10){
        resultado.innerHTML += `${tabuada} x ${n} = ${tabuada * n}<br>` 
        n++

        
    }

}

button.addEventListener("click" , gerarTabuada)