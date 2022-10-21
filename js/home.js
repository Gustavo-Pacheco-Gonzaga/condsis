const menuu = document.querySelector('header');
const menuLogo = document.getElementById('logo-link');
const menuLinks = document.querySelector('nav');
const mobileImg = document.getElementById('secao2-img-mobile');
const pcImg = document.getElementById('secao2-img-pc');
const secao13MobileImg = document.getElementById('secao13-img-mobile');

document.addEventListener('scroll', function () {
    let position = window.pageYOffset;

    // Imagens seção2
    if (position > 0) {
        mobileImg.classList.add('secao2-show-img-mobile');
        pcImg.classList.add('secao2-show-img-pc');
    }

    // Imagem secao13
    if (position > 10300) {
        secao13MobileImg.classList.add('secao13-show-img-mobile');
    }

    // Menu
    if (position > 395) {
        menuu.classList.add('hide-menu');
        menuLogo.classList.add('hide-menu-content');
        menuLinks.classList.add('hide-menu-content');
    }
    if (position < 300) {
        menuu.classList.remove('hide-menu');
        menuLogo.classList.remove('hide-menu-content');
        menuLinks.classList.remove('hide-menu-content');
    }
});