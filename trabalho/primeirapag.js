const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;



controls.forEach(control => {
    control.addEventListener('click', () =>{
        const isLeft = control.classList.contains('seta-esquerda');
        console.log('control clicado', isLeft);

        if(isLeft){
            currentItem-=1;
        }
        else{
            currentItem+=1;
        }

        if(currentItem>= maxItems){
            currentItem = 0;
        }

        if(currentItem<0){
            currentItem = maxItems - 1;
        }

        console.log('oba clicou', isLeft, currentItem);

        items.forEach(items => items.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline:'center',
            behavior: "smooth"
        });
        items[currentItem].classList.add('current-item');
    });
});