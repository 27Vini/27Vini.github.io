const btnTeste = document.querySelector("#teste")
const marmota = document.querySelectorAll(".mole")
const ponto = document.querySelector(".score")



const removeMarmota = numBuraco =>{
    //const buraco = document.querySelector(`.hole${numBuraco}`)
    numBuraco.classList.remove("up")
}

const sorteiaBuraco = () => {
    const numBuraco = Math.trunc(Math.random()*6)+ 1
    return document.querySelector(`.hole${numBuraco}`)
}


const defineTempo = (min,max) =>Math.round((Math.random()*(max-min))+min)


const contaPontos = () =>{
    const ponto = document.querySelector(".score")
    const valor = parseInt(ponto.innerHTML) + 1
    
    ponto.innerHTML = valor
}

let jogando = false;
const chamando = () =>{
    setInterval(function(){
        jogando = true;
    },20000)
    jogando = false
}

const startGame = () =>{
    chamando()


    const numBuraco = sorteiaBuraco();
    numBuraco.classList.add("up")
    const tempoExposto = Math.trunc((Math.random())+ 500)

    
    setTimeout(function(){
        removeMarmota(numBuraco)
    },tempoExposto)

    setTimeout(function(){
        if(!jogando)
        startGame()
        else {
            pontos = document.querySelector(".score").value
            alert("ACABO")
        document.querySelector(".score").innerHTML = 0;
    }
    },tempoExposto)


}





marmota.forEach(marmota =>
    marmota.addEventListener("click",function(){
        contaPontos();
    })
    )



