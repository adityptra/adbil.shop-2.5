let menu = document.getElementById("menu")
let close =document.querySelector(".bars-close")    
let bars = document.getElementById("bars")
function muncul (){
    menu.style.left = "40px"
    bars.style.display = "none"
    close.style.display = "inline"
}
function tutup (){
    menu.style.left = "-200px"
    bars.style.display = "inline"
    close.style.display = "none"
}

    const navbar = document.querySelector(".navbar")
    const up = document.getElementById("arrow1")
    window.addEventListener("scroll",() =>{
        const positionwindow = window.scrollY >120;
        navbar.classList.toggle("scrolling-active",positionwindow)
    })
    window.addEventListener("scroll",() =>{
        const positionwindow = window.scrollY >580;
        if (positionwindow){
            up.style.display ="block"
        }
    })
    window.addEventListener("scroll",() =>{
        const positionwindow = window.scrollY <32;
        if (positionwindow){
            up.style.display ="none"
            up.style.transition ="all .3s ease"
        }
    })
    window.addEventListener("scroll",() =>{
        const positionwindow = window.scrollY >580;
        if (positionwindow){
            up.style.display ="block"
            up.style.transition ="all .3s ease"
        }
    })
    window.addEventListener('click',(e) => {
        if (e.target != bars && e.target != menu){
            tutup()
        }
    })
    window.addEventListener('scroll',(e) => {
        if (e.target != bars && e.target != menu){
            tutup()
        }
    })
    // swiper effect start
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

   

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// swipper effect end

let goLeft = document.querySelector('#goleft')
let goRight = document.querySelector('#goright')

