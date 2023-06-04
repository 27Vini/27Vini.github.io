const bt01 = document.querySelector("#resp01")


const lerNumero = (endereco) =>{
    const x = document.querySelector(endereco)
    return parseFloat(x.value) || 0
}


const somar = (a,b)=> a+b

const apagaIpt = (endereco) =>{
    document.querySelector(endereco).value=""
}


const escreverNaTela = (valor,elementoId) =>{
    const pHTML = document.createElement("p")
    const pTN = document.createTextNode(valor)

    pHTML.appendChild(pTN)
    elementoId.appendChild(pHTML)
}

bt01.addEventListener("click",function(){
    const num01 = lerNumero("#ex01-num1")
    console.log(num01)
    const num02 = lerNumero("#ex01-num2")
    const valor = somar(num01,num02)
    const soma = document.querySelector("#resposta")
    apagaIpt("#ex01-num1")
    apagaIpt("#ex01-num2")
    escreverNaTela(valor,soma)
})


//EXERCICIO 2

const maior = (a,b) =>{
    if(a>b)
        return a;
    return b
}




const bt02 = document.querySelector("#resp02")

bt02.addEventListener("click",function(){
    const n1 = lerNumero("#ex02-num1")
    const n2 = lerNumero("#ex02-num2")

    escreverNaTela(maior(n1,n2),document.querySelector("#resposta2"))
})



//EXERCICIO 3

const ehPrimo = (a) =>{
    if(a<2)
        return false;
    let i = 1
    let contador = 0
    while(i<=a){
        if(a % i == 0)
            contador++
        i++
    }

    if(contador <=2)
        return true
    return false

}



const bt03 = document.querySelector("#resp03")

bt03.addEventListener("click",function(){
    const num = lerNumero("#ex03-num1")

    const primo = (ehPrimo(num))?"E primo": "Nao e primo"


    escreverNaTela(primo,document.querySelector("#resposta3"))
})





