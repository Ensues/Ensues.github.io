/* ============================================
   PORTFOLIO INTERACTIVE SCRIPT
   ============================================ */

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initMobileMenu();
    initScrollNav();
    initSmoothScroll();
    // Ensure sidebar is hidden on load
    try { hideSidebar(); } catch (e) {}
    // Ensure mobile menu is closed on load
    try {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn') || document.getElementById('menu-icon') || document.querySelector('.bx-menu');
        const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
        if (mobileMenuBtn && mobileMenuBtn.classList) mobileMenuBtn.classList.remove('active');
        if (navMenu && navMenu.classList) navMenu.classList.remove('active');
    } catch (e) {}
});

/* ============================================
   THEME TOGGLE (DARK/LIGHT MODE)
   ============================================ */

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle') || document.getElementById('theme-toggle') || document.querySelector('#theme-toggle');
    const html = document.documentElement;
    if (!themeToggle) return; // nothing to do if toggle is missing

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeToggle);

    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeToggle);
    });
}

function updateThemeIcon(theme) {
    // second arg optional: button element to scope icon lookup
    const toggleEl = arguments[1];
    const icon = (toggleEl && (toggleEl.querySelector('.theme-icon') || toggleEl.querySelector('i') || toggleEl.querySelector('.ti'))) || document.querySelector('.theme-icon') || document.querySelector('#theme-toggle i');
    if (icon) {
        try {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        } catch (e) {
            // ignore if icon doesn't support textContent
        }
    } else if (toggleEl) {
        toggleEl.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
}

/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn') || document.getElementById('menu-icon') || document.querySelector('.bx-menu');
    const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
    let navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks || navLinks.length === 0) {
        navLinks = navMenu ? navMenu.querySelectorAll('a') : document.querySelectorAll('a');
    }

    if (!mobileMenuBtn || !navMenu) return;

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnButton = mobileMenuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/* ============================================
   SCROLL-BASED ACTIVE NAVIGATION
   ============================================ */

function initScrollNav() {
    let navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks || navLinks.length === 0) {
        const nav = document.querySelector('.nav-menu') || document.querySelector('.nav-container') || document.querySelector('.navbar');
        navLinks = nav ? nav.querySelectorAll('a') : document.querySelectorAll('a[href^="#"]');
    }
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active-nav');
                try {
                    if (link.getAttribute('href') === '#' + currentSection) {
                        link.classList.add('active-nav');
                    }
                } catch (e) {
                    // ignore malformed links
                }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle section links
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();

                const target = document.querySelector(href);
                const navbar = document.querySelector('.nav-container') || document.querySelector('.navbar') || document.querySelector('header');
                const headerHeight = navbar ? navbar.clientHeight : 0;
                const targetTop = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ============================================ */

// Optional: Add fade-in animations as sections come into view
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards and other elements for subtle animations
    document.querySelectorAll('.project-card, .education-item, .skill-category').forEach(el => {
        el.style.opacity = '0.8';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

/* ============================================
   PERFORMANCE: LAZY LOAD IMAGES
   ============================================ */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ============================================
   KEYBOARD NAVIGATION
   ============================================ */

// Ensure all interactive elements are keyboard accessible
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn') || document.getElementById('menu-icon') || document.querySelector('.bx-menu');
        const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
        if (mobileMenuBtn && mobileMenuBtn.classList) mobileMenuBtn.classList.remove('active');
        if (navMenu && navMenu.classList) navMenu.classList.remove('active');
    }
});

/* ============================================
   SKIP TO CONTENT (Accessibility)
   ============================================ */

// The skip link is in HTML; this ensures it works smoothly
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') ? this.getAttribute('href').substring(1) : null;
        if (!targetId) return;
        const target = document.querySelector('#' + targetId);
        if (!target) return;
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus();
    });
}

/* ============================================
   SIDEBAR SHOW/HIDE (triggered by inline buttons)
   ============================================ */
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    sidebar.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
}
