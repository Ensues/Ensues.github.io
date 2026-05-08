// Menu icon and navigation
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Scroll spy: highlight nav links based on section in view
window.addEventListener('scroll', () => {
    const top = window.scrollY;
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const selector = `header nav a[href="#${id}"]`;
            const el = document.querySelector(selector);
            if (el) el.classList.add('active');
        }
    });
});

menuIcon && (menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'block';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'none';
}

// Wire sidebar buttons (in case inline onclick is removed later)
const sidebarOpen = document.getElementById('sidebar-open');
const sidebarClose = document.getElementById('sidebar-close');
sidebarOpen && sidebarOpen.addEventListener('click', showSidebar);
sidebarClose && sidebarClose.addEventListener('click', hideSidebar);

// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
function applyThemeFromStorage() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
}
applyThemeFromStorage();
themeToggle && themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Initialize typed.js if available
if (typeof Typed !== 'undefined') {
    new Typed('.auto-type1', {
        strings: ['DEVELOPER', 'DATA SCIENTIST', 'DATA ANALYST'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
}