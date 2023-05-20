//criar xml http request
const xhttp = new XMLHttpRequest();

//definir a URL que pretendemos usar
const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"

const criaPrato = (elemHTML,prato)=>{
    const divHTML = document.createElement("div")
    const tituloHTML = document.createElement("h1")
    const descricaoHTML = document.createElement("p")
    const fotoHTML = document.createElement("img")
  
    divHTML.classList.add("pratos")
    
    const tituloTN = document.createTextNode(prato.nome)
    const descricaoTN = document.createTextNode(prato.descricao)


    tituloHTML.appendChild(tituloTN)
    descricaoHTML.appendChild(descricaoTN)
    fotoHTML.src = prato.foto
    fotoHTML.alt = `Foto do Prato ${prato.nome}`
    //adiciona-los a div
    divHTML.appendChild(tituloHTML)
    divHTML.appendChild(descricaoHTML)
    divHTML.appendChild(fotoHTML)
    //adicionar no DOM
    elemHTML.appendChild(divHTML)


}

const criaIngredientes = (lista,prato) =>{
    const ulHTML = document.createElement("ul")
   
    const pHTML = document.createElement("p")


    prato.ingredientes.forEach(function(ingrediente){
        const liHTML = document.createElement("li")
        const pTN = document.createTextNode(ingrediente)
        liHTML.appendChild(pTN)
        ulHTML.appendChild(liHTML)
    })
    lista.appendChild(ulHTML)
}


const criaPreparo = (lista,prato) =>{
    const olHTML = document.createElement("ol")
   
    const pHTML = document.createElement("p")


    prato.preparo.forEach(function(preparo){
        const liHTML = document.createElement("li")
        const pTN = document.createTextNode(preparo)
        liHTML.appendChild(pTN)
        olHTML.appendChild(liHTML)
    })
    lista.appendChild(olHTML)
}



const criaReceitas = lista =>{
    
    const cardapioHTML = document.querySelector(".cardapio")
    lista.forEach(function(receita){
        criaPrato(cardapioHTML,receita)
        criaIngredientes(cardapioHTML,receita)
        criaPreparo(cardapioHTML,receita)
    })
}

/* <div class="pratos">
            <h1>Nome do Prato</h1>
            <p>Descricao do Prato</p>
            <img src="url_prato" alt="nome_prato">
        </div> */


//quando o objeto mudar de estado para
//estado 4 e status HTTP = 200
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //programar uma ação
        const receitas = JSON.parse(this.responseText);
        criaReceitas(receitas);
    }
}

//enviar abrir o objeto
xhttp.open("GET",url)

//enviar o objeto
xhttp.send()