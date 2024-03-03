let btnElems = document.querySelectorAll('.drum');

btnElems.forEach((elem)=>{
    elem.addEventListener('click',function(){
        let btnValue = this.innerText;
        makeSound(btnValue);
        btnToggle(btnValue); 
    })
});

addEventListener('keypress',(event) =>{
    makeSound(event.key);
    btnToggle(event.key);
})

function makeSound(key){
    switch (key) {
        case 'w':
            let aud = new Audio('sounds/tom-1.mp3');
            aud.play();
            break;
        case 'a':
            let aud1 = new Audio('sounds/tom-2.mp3');
            aud1.play();
            break;
        case 's':
            let aud2 = new Audio('sounds/tom-3.mp3');
            aud2.play();
            break;
        case 'd':
            let aud3 = new Audio('sounds/tom-4.mp3');
            aud3.play();
            break;
        case 'j':
            let aud4 = new Audio('sounds/snare.mp3');
            aud4.play();
            break;
        case 'k':
            let aud5 = new Audio('sounds/crash.mp3');
            aud5.play();
            break;
        case 'l':
            let aud6 = new Audio('sounds/kick-bass.mp3');
            aud6.play();
            break;
    
        default:
            break;
    }
}

function btnToggle(val) {
    let btn = document.querySelector('.' + val);

    if (btn) {
        btn.classList.add('pressed');
        setTimeout(() => {
            btn.classList.remove('pressed');
        }, 100);
    }
}
