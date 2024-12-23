// menu icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document. querySelectorAll('.section');
let naviinks = document. querySelectorAll('header nava');

window.onscroll = () => {
    sections. forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Light mode

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.querySelector('.header').classList.toggle('light-mode');
    document.querySelector('.navbar').classList.toggle('light-mode');
    document.querySelector('.footer').classList.toggle('light-mode');
    document.querySelector('.logo').classList.toggle('light-mode'); 
    document.querySelector('span').classList.toggle('light-mode');
    document.querySelector('.btn').classList.toggle('light-mode'); 
    document.querySelector('.btn-group').classList.toggle('light-mode');
    document.querySelector('.go-to-btn').classList.toggle('light-mode');
    document.querySelector('.color-btn').classList.toggle('light-mode');
    document.querySelector('.bar').classList.toggle('light-mode');
    document.querySelector('.home').classList.toggle('light-mode');
    document.querySelector('.social').classList.toggle('light-mode');
    document.querySelector('.social-icons').classList.toggle('light-mode');
    document.querySelector('.home-content').classList.toggle('light-mode'); 
    document.querySelector('.education').classList.toggle('light-mode');
    document.querySelector('.skills').classList.toggle('light-mode');
    document.querySelector('.projects').classList.toggle('light-mode');
    document.querySelector('.certificates').classList.toggle('light-mode');
    document.querySelector('.contact').classList.toggle('light-mode');
    // document.querySelector('.').classList.toggle('light-mode'); <-- Add this line
});

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".loader"));
    });
});