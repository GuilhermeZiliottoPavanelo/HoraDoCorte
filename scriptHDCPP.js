// Adicione a seguinte função no script.js

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'flex' || nav.style.display === '') ? 'none' : 'flex';
}
