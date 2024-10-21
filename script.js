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
    document.querySelector('.logo').classList.toggle('light-mode'); // Add this line

    // Change button text based on the current mode
    if (document.body.classList.contains('light-mode')) {
        this.textContent = 'Dark Mode';
    } else {
        this.textContent = 'Light Mode';
    }
});