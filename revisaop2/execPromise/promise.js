const criaPrato = (prato,elemHTML) =>{
    const divHTML= document.createElement("div")
    const h2HTML = document.createElement("h2")
    const pHTML = document.createElement("p")
    const imgHTML = document.createElement("img")

    imgHTML.src=prato.foto
    imgHTML.alt= prato.nome

    const h2TN = document.createTextNode(prato.nome)
    const pTN= document.createTextNode(prato.descricao)
    h2HTML.appendChild(h2TN)
    pHTML.appendChild(pTN)

    divHTML.appendChild(h2HTML)
    divHTML.appendChild(imgHTML)
    divHTML.appendChild(pHTML)

    elemHTML.appendChild(divHTML)

}




const criaReceitas = (receitas) =>{
    const cardapioHTML = document.querySelector(".cardapio")
    receitas.forEach(element => {
        criaPrato(element,cardapioHTML)
    });
}



if(self.fetch){
    const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"

    fetch(url)
        .then(response => response.json())
        .then(function(receitas){
            criaReceitas(receitas)
        }).catch(function(erro){
            alert(`ERRO ${erro}`)
        })
}