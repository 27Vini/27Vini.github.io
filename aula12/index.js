const loadRecipe = recipeList =>{
        const divResp = document.querySelector("#result")
        recipeList.forEach(function(recipe){
            divResp.innerHTML += `<h1>${recipe.nome}</h1>`
        })
}



if(self.fetch){
    //executando algo com fetch API
    const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"
    

    /*fetch(url).then(function(response){
        //obejto de resposta
        return response.json() 
    }).then(lista => {
        console.log("resposta do servidor ",lista)
    }).catch(function(erro){
        console.log('Deu zebra ',erro);
    })*/

    fetch(url)//promise com requisacao
        .then(response => response.json())//resposta em processo 
        .then(function(listaDeReceitas){ //resposta para consumo
            loadRecipe(listaDeReceitas)
        }).catch(function(erro){
            console.log('Deu zebra ',erro);
        })




}else{
    //use o objeto XMLHttpRequest
}