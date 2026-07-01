// Main Application Entry Point
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: false,
        offset: 50,
        delay: 0
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav__menu');
                const navToggle = document.querySelector('.nav__toggle');
                if (navMenu.classList.contains('nav__menu--active')) {
                    navMenu.classList.remove('nav__menu--active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
    
    // Add scroll effect to navigation
    let lastScroll = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(9, 9, 11, 0.95)';
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(9, 9, 11, 0.8)';
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for lazy loading and performance
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe lazy-loaded elements
    document.querySelectorAll('[data-lazy]').forEach(el => {
        observer.observe(el);
    });
    
    // Performance: Preload critical resources
    const criticalResources = [
        'https://unpkg.com/lucide@latest',
        'https://unpkg.com/aos@next/dist/aos.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
    
    console.log('IDP Enterprise Landing Page initialized');
});
