let cards = document.querySelectorAll('card-container .card');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow(){
    let stt = 0;
    card[active].style.transform="none";
    card[active].style.zIndex = 1;
    card[active].style.filter = 'none';
    card[active].style.opacity = 1;

    for(var i = active - 1; i < card.length; i++){

        stt++;
        card[i].style.transform = 'translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotate(-1deg)';
        card[i].style.zIndex = -stt;
        card[i].style.filter = 'blur(5px)';
        card[i].style.opacity = stt > 2 ? 0 : 0.6;

    }

    stt = 0;
for(var i = active - 1; i >=0; i++){

    stt++;
    card[i].style.transform = 'translateX(${-120*stt}px) scale(${1 -0.2*stt}) perspective(16) rotate(-1deg)';
    card[i].style.zIndex = -stt;
    card[i].style.filter = 'blur(5px)';
    card[i].style.opacity = stt > 2 ? 0 : 0.6;
}
        

    }

loadShow();