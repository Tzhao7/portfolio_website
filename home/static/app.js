const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".welcome-content", { opacity: 0 }, { opacity: 1, duration: 1 });
//t1.fromTo(".background", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
//t1.fromTo(".img__container", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    const experienceMenu = document.querySelector('#experience-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if (window.innerWidth > 960 && scrollPos < 860) {
        homeMenu.classList.add('highlight');

        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        experienceMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1600) {
        aboutMenu.classList.add('highlight');

        homeMenu.classList.remove('highlight');       
        projectsMenu.classList.remove('highlight');
        experienceMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2650) {
        projectsMenu.classList.add('highlight');

        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        experienceMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2900) {
        experienceMenu.classList.add('highlight');
        
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    }
    
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const disableCard1 = document.getElementById('card1');
const disableCard2 = document.getElementById('card2');
const disableCard3 = document.getElementById('card3');
const disableCard4 = document.getElementById('card4')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log(modal)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    }) 
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    disableCard1.classList.add('active')
    disableCard2.classList.add('active')
    disableCard3.classList.add('active')
    disableCard4.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    disableCard1.classList.remove('active')
    disableCard2.classList.remove('active')    
    disableCard3.classList.remove('active')
    disableCard4.classList.remove('active')
}