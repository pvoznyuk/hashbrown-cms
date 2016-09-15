let navbar = document.querySelector('nav');
let banner = document.querySelector('section.banner');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('darken', document.body.scrollTop > banner.clientHeight);
});
