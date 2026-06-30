// Navigation Module
class Navigation {
    constructor() {
        this.navToggle = document.querySelector('.nav__toggle');
        this.navMenu = document.querySelector('.nav__menu');
        this.navLinks = document.querySelectorAll('.nav__link');
        this.init();
    }
    
    init() {
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav')) {
                this.closeMenu();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
            }
        });
        
        // Active link highlighting
        this.highlightActiveLink();
        
        window.addEventListener('scroll', () => this.highlightActiveLink());
    }
    
    toggleMenu() {
        const isActive = this.navMenu.classList.toggle('nav__menu--active');
        this.navToggle.setAttribute('aria-expanded', isActive);
        
        // Change icon
        const icon = this.navToggle.querySelector('i');
        if (isActive) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    }
    
    closeMenu() {
        if (this.navMenu.classList.contains('nav__menu--active')) {
            this.navMenu.classList.remove('nav__menu--active');
            this.navToggle.setAttribute('aria-expanded', 'false');
            
            const icon = this.navToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    }
    
    highlightActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
