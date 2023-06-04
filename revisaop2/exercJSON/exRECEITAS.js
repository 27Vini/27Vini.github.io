const xhttp = new XMLHttpRequest();

const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"


const criaPrato = (prato,elemHTML) =>{
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
    fotoHTML.alt = prato.nome

    divHTML.appendChild(tituloHTML)
    divHTML.appendChild(descricaoHTML)
    divHTML.appendChild(fotoHTML)
    //adicionar no DOM
    elemHTML.appendChild(divHTML)
}


const criaPreparo = (elem,elemHTML) =>{
    const olHTML = document.createElement("ol")
    const h3HTML = document.createElement("h3")
    const h3TN = document.createTextNode("Modo De Preparo")
    h3HTML.appendChild(h3TN)
    elem.preparo.forEach(preparo =>{
        const liHTML = document.createElement("li")
        const liTN = document.createTextNode(preparo)
        liHTML.appendChild(liTN)
        olHTML.appendChild(liHTML)    
    })
    elemHTML.appendChild(h3HTML)
    elemHTML.appendChild(olHTML)
}

const criaIngredientes = (prato,elemHTML) =>{
    const ulHTML = document.createElement("ul")
    const h3HTML = document.createElement("h3")
    const h3TN = document.createTextNode("Ingredientes")
    h3HTML.appendChild(h3TN)
    elemHTML.appendChild(h3HTML)
    prato.ingredientes.forEach(ingrediente =>{
        const liHTML = document.createElement("li")
        const liTN = document.createTextNode(ingrediente)
        liHTML.appendChild(liTN)
        ulHTML.appendChild(liHTML)
    
    })
    elemHTML.appendChild(ulHTML)
}

const criarReceitas = (lista) =>{
    const cardapioHTML = document.querySelector(".cardapio")
    lista.forEach(element => {
        criaPrato(element,cardapioHTML)
        criaPreparo(element,cardapioHTML)
        criaIngredientes(element,cardapioHTML)
    });
}




xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //programar uma ação
        const receitas = JSON.parse(this.responseText);
        criarReceitas(receitas);
    }
}


//enviar abrir o objeto
xhttp.open("GET",url)

//enviar o objeto
xhttp.send()