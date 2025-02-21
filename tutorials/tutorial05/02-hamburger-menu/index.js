function toggleMenu() {
    const menu = document.querySelector('#nav-links');
    const hamburger = document.querySelector('#menu-toggle');

    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}