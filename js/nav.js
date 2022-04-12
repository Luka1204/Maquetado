const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');


navToggle.addEventListener("click" , function(){
    navMenu.classList.toggle('nav-menu_visible')

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menú")
    }else{
        navToggle.setAttribute("aria-label","Abrir menú")

    }
})
