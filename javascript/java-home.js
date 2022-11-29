// JavaScript para o botao para mobile
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const act = nav.classList.contains('active') 
    event.currentTarget.setAttribute('aria-expanded', act)
    if (act){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else {event.currentTarget.setAttribute('aria-label', 'Abrir Menu')}
}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

// JavaScript para o carrosel de imagens

var swiper = new Swiper(" .mySwiper", { 
    speed: 400,
    slidesPerView:1,
    spaceBetween:30,
    slidesPerGroup:1,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
        
    }
    
}
)


// JavaScript para o display de Historia 

function mostrar(){
        for(var i=1;i<4;i++){
            document.getElementById("aba"+i).hidden = true;
        }
        var obj=event.target.dataset.nome;
        document.getElementById(obj).hidden=false;
    }
function inicia(){
        for(var i=1;i<4;i++){
            document.getElementById("aba"+i).hidden = true;
        }
        document.getElementById("profile").addEventListener("click",mostrar);
        document.getElementById("netw").addEventListener("click",mostrar);
        document.getElementById("netw2").addEventListener("click",mostrar);
        
    }
    window.addEventListener("load",inicia);