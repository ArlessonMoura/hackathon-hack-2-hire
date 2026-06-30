// Animated Counters Module
class Counters {
    constructor() {
        this.counters = document.querySelectorAll('.results__number');
        this.animated = false;
        this.init();
    }
    
    init() {
        if (this.counters.length === 0) return;
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateCounters();
                    this.animated = true;
                }
            });
        }, observerOptions);
        
        const resultsSection = document.querySelector('.results');
        if (resultsSection) {
            observer.observe(resultsSection);
        }
    }
    
    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
}

// Initialize counters
document.addEventListener('DOMContentLoaded', () => {
    new Counters();
});
