// Particles Animation Module
class Particles {
    constructor() {
        this.container = document.getElementById('particles');
        if (!this.container) return;
        
        this.particleCount = 50;
        this.particles = [];
        this.init();
    }
    
    init() {
        this.createParticles();
        this.animate();
    }
    
    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero__particle';
            
            // Random positioning and timing
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = 15 + Math.random() * 10;
            const size = 2 + Math.random() * 4;
            
            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }
    
    animate() {
        // Particles are animated via CSS
        // This method can be extended for more complex animations
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    new Particles();
});
