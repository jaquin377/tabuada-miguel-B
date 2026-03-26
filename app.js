const select = document.getElementById("select")
const button = document.getElementById("button")

function gerarTabuada(){
    const tabuada = select.value
    let n = 0 
    while(n <= 10){
        console.log(tabuada = n)
        n++
    }

}

button.addEventListener("click" , gerarTabuada)