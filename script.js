document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById("menu-icon");
    const navbar = document.querySelector('.nav-bar');

    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-bars');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('vertical-nav');
    });
    
});





