/* ============================================
   DIIM Digital Twin Technologies
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // --------------------------------------------
    // Scroll Animations (Intersection Observer)
    // --------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .project-card').forEach(el => {
        observer.observe(el);
    });


    // --------------------------------------------
    // Navbar Scroll Effect
    // --------------------------------------------
    const nav = document.querySelector('.nav');
    
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('nav--scrolled');
            } else {
                nav.classList.remove('nav--scrolled');
            }
        });
    }


    // --------------------------------------------
    // Smooth Scroll for Anchor Links
    // --------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // --------------------------------------------
    // Mobile Menu Toggle (for future use)
    // --------------------------------------------
    const menuToggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.querySelector('.nav__mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

});
