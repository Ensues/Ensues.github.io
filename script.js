// Menu icon and navigation
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const goToBtn = document.querySelector('.go-to-btn');

// Scroll spy: highlight nav links based on section in view
window.addEventListener('scroll', () => {
    const top = window.scrollY;
    
    // Update go-to-top button visibility
    if (goToBtn) {
        if (top > 300) goToBtn.classList.add('show');
        else goToBtn.classList.remove('show');
    }
    
    // Scroll spy: highlight active nav link
    sections.forEach(sec => {
        const offset = sec.offsetTop - 200;
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

// Menu toggle
menuIcon && (menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Sidebar functions
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Wire sidebar buttons
const sidebarOpen = document.getElementById('sidebar-open');
const sidebarClose = document.getElementById('sidebar-close');
sidebarOpen && sidebarOpen.addEventListener('click', showSidebar);
sidebarClose && sidebarClose.addEventListener('click', hideSidebar);

// Close sidebar when clicking on a link
document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        hideSidebar();
        const navBtn = document.querySelector('.navbar a[href="' + link.getAttribute('href') + '"]');
        if (navBtn) navBtn.classList.add('active');
    });
});

// Close sidebar on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideSidebar();
});

// Go-to-top button
if (goToBtn) {
    goToBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

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
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
}