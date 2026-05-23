// Menu mobile toggle
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});
