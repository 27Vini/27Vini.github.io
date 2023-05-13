//captura elemento botao do dom
const bt01 = document.querySelector('#bt01');



const pesquisaTermo = (termo,lista) =>{
    for(let i= 0;i<lista.length;i++){
        let objeto = lista[i];
       if(objeto.termo == termo)
        return i;
    }
    return -1;

}

const contaVogais = lista =>{
    const numVogais = document.querySelector("#result-vogais");
    const letras = lista.toLowerCase().split("");
    let num = 0;
    for(let i=0;i<letras.length;i++){
        if(letras[i] == "a" || letras[i] == "e" || letras[i] == "i" || letras[i] == "o" || letras[i] == "u")
            num++;
    }
    numVogais.innerHTML = num;
}


const contaTotalPalavras = texto =>{
    return texto.length;
}



const exibeTermos = lista =>{
    const tbodyElem = document.querySelector("#result01");
    tbodyElem.innerHTML = "";
    for(let i = 0;i<lista.length;i++){
        let objeto = lista[i];
        let termo = objeto.termo;
        let numVezes = objeto.ocorrencia;

    
    tbodyElem.innerHTML+= `<tr>
                            <td>${termo}</td>
                            <td>${numVezes}</td>
                            </tr>
                            `
    }
}
/**
 * 
 * 
 * 
 * @param texto - String
 * 
 * @return {termo1:ocorrencia1, ... , termon:ocorrencian} - Object
 */



const contaPalavras = texto => {
    //transformar texto em um array
    const listaDePalavras = texto.toLowerCase().split(" ");
    let resultado = [];
    //percorre-lo
    for(let i = 0;i<listaDePalavras.length;i++){
        //contar ocorrencias
        let objetoContagem = {};

        let indice = pesquisaTermo(listaDePalavras[i],resultado);
        if(indice>=0){
            resultado[indice].ocorrencia++;
        }
        else{      
            objetoContagem.termo = listaDePalavras[i];
            objetoContagem.ocorrencia = 1;
    
            resultado.push(objetoContagem);
        }
    }
    console.log("resultado: ")
console.log(resultado);
exibeTermos(resultado);
}




//programar evento
bt01.addEventListener("click", function(){
    //ao clicar botao 
        //recuperar texto digitado
        const texto = document.querySelector("#ex01").value;
        contaPalavras(texto);
        const listaTermos = texto.toLowerCase().split(" ");
        let numLetras = 0;
        for(i=0;i<listaTermos.length;i++)
            numLetras += listaTermos[i].length;
            document.querySelector("#result-letras").innerHTML = numLetras;
        contaVogais(texto);
        document.querySelector("#result-palavras").innerHTML = contaTotalPalavras(listaTermos);
    

        const listaEnd = [{
            rua: "Rua dos Pinheiros",
            numero: 1254,
            bairro: "Centro",
            cidade: "Sao Paulo",
            uf:"SP",
            interesses: ["IA","DevOps"]
        },{
            rua: "Rua dos Carioca",
            numero: 666,
            bairro: "Arooz",
            cidade: "Niteroi",
            uf:"RJ",
            interesses:["Web30","BigData","IA"] 
        }]

        escreveFrase(listaEnd);
})


    
    
    
    
    //conta palavras
    
    
    
    
    //conta letras



    //conta vogais



    //letra mais comum
  
    const escreveFrase = lista =>{
        
        for(let i =0;i<lista.length;i++){
            let objeto = lista[i];
        
        document.querySelector("#ex02").innerHTML += `O usuario mora em  ${objeto.cidade}/${objeto.uf}, no bairro ${objeto.bairro}, na rua ${objeto.rua} com n° ${objeto.numero} <br>`;
        for(let j = 0;j<objeto.interesses.length;j++){
            document.querySelector("#ex02").innerHTML += `${objeto.interesses[j]} <br>`
        }
        }
    }