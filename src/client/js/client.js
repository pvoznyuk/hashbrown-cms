let navbar = document.querySelector('nav');
let allSections = [].slice.call(document.querySelectorAll('section'));

function checkScroll() {
    let isOverLightSection = true;
    let scrollPos = document.body.scrollTop;

    for(let section of allSections) {
        // Found section
        if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.clientHeight) {
            isOverLightSection = !section.classList.contains('dark');
            break;
        }
    }

    navbar.classList.toggle('darken', isOverLightSection);
}

window.addEventListener('scroll', checkScroll);

checkScroll();
