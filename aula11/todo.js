const btnAdd = document.querySelector("#add");


btnAdd.addEventListener("click",function(){
    const tarefa = document.querySelector("#task").value;
    
    const liHTML= document.createElement("li");
    const taskTN = document.createTextNode(tarefa);
    liHTML.appendChild(taskTN);
    const toDoListHTML = document.querySelector("#todolist");


    toDoListHTML.appendChild(liHTML);
    document.querySelector("#task").value = "";
})


const criaLi = (elemenUL,tarefa) =>{
    const tarefa = document.querySelector("#task").value;
    const linkHTML = document.createElement("a");
    const liHTML= document.createElement("li");
    const taskTN = document.createTextNode(tarefa);
    const linkText = document.createTextNode("apagar")
    

    linkHTML.appendChild(linkText);
    linkHTML.href= "#";

    liHTML.appendChild(linkHTML);

    const lista = document.querySelector("#todolist");
    lista.appendChild(liHTML);
}