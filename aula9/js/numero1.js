/*Exercicio 1*/
//ao clicar botao
const botao1 = document.getElementById('exerc01');


const lerNumero = (idDoElemento) =>{
    const x = document.querySelector(idDoElemento);
    return parseFloat(x.value) || 0;
}

const apagaIpt = (idDoElemento) =>{
    document.querySelector(idDoElemento).value = "";
}
const soma= (a,b)=> a+b;



botao1.onclick = function(){
    
    const num1= lerNumero('#ex01-num01');
    console.log(num1)
    const num2 = lerNumero('#ex01-num02');
    console.log(num2);

    const resultado = soma(num1,num2);
    console.log(resultado);



    document.getElementById("resp01").innerHTML = "o resultado e " + resultado;



   
    apagaIpt('#ex01-num01');
    apagaIpt('#ex01-num02');
}

/*Exercicio 2*/
const botao2 = document.getElementById('exerc02');

const maior = (a,b) =>{
    if(a>b){
        return a;
    }else
    return b;
}

botao2.onclick= function(){
    const num1 = lerNumero('#ex02-num01');
    const num2 = lerNumero('#ex02-num02');

    const resultado = maior(num1,num2);

    document.getElementById('resp02').innerHTML = 'o maior numero e '+resultado;

    apagaIpt('#ex02-num01');
    apagaIpt('#ex02-num02');
}

/*Exercicio 3*/


const botao3 = document.getElementById('exerc03');

const primo = (a) =>{
    if(a<2){
        return false;
    }
    let b = 1;
    let cont = 0;
    while(b<=a){
        if(a % b == 0)
            cont++
        b++;
    }
    if(cont <= 2){
        return true;
    }else 
        return false
}


botao3.onclick = function(){
    const num  = lerNumero('#ex03-num01');

    const resultado = (primo(num))? 'E primo':'Nao e primo';

    document.getElementById('resp03').innerHTML = resultado;

    apagaIpt('#ex03-num01');
}



/*Exercicio 4*/
const botao4 = document.getElementById('exerc04');


const ehPar=(a)=> (a%2 == 0)? 'Par':'Impar';


botao4.onclick = function(){
    const num = lerNumero('#ex04-num01');

    document.getElementById('resp04').innerHTML = ehPar(num);

    apagaIpt('#ex04-num01');
}



/*Exercicio 5*/


const botao5 = document.getElementById('exerc05');

const fibo = (a)=>{
    let x=0;
    let y=1;
    let z= 0;
    document.getElementById('resp05').innerHTML = x + ' ';
    document.getElementById('resp05').innerHTML = document.getElementById('resp05').innerHTML + y + ' ';
    while(y < a){
        
        z= x;
        x = y;
        y +=z;
        document.getElementById('resp05').innerHTML = document.getElementById('resp05').innerHTML + y + ' ';
    }
}

botao5.addEventListener('click',function() {
    const num = lerNumero('#ex05-num01');

     fibo(num);
})
/*Exercicio 6*/

