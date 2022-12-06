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


