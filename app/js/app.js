// Main Application Entry Point
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true,
    offset: 50,
    delay: 0,
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
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
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe lazy-loaded elements
  document.querySelectorAll('[data-lazy]').forEach((el) => {
    observer.observe(el);
  });

  // Performance: Preload critical resources
  const criticalResources = [
    'https://unpkg.com/lucide@latest',
    'https://unpkg.com/aos@next/dist/aos.css',
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });

  // Modal accessibility state management
  const modal = document.getElementById('modal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');

  const setModalVisibility = (isVisible) => {
    if (!modal) return;
    modal.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
  };

  const openModal = (title = '', content = '') => {
    if (!modal) return;
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle && title) {
      modalTitle.textContent = title;
    }
    if (modalBody && content) {
      modalBody.innerHTML = content;
    }
    
    modal.classList.add('modal--active');
    setModalVisibility(true);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('modal--active');
    setModalVisibility(false);
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Open modal with image when clicking on social links
  document.querySelectorAll('.footer__social-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(
        'QUEM TESTA É A VIDA',
        '<img src="./app/assets/images/quem-testa-eh-a-vida.jpeg" alt="Quem Testa é a Vida" style="max-width: 100%; height: auto; border-radius: 8px;">'
      );
    });
  });

  // Dynamic zoom on hover for architecture image
  const architectureImage = document.getElementById('architectureImage');
  if (architectureImage) {
    const img = architectureImage.querySelector('img');
    const zoomHint = architectureImage.querySelector('.architecture__zoom-hint');
    
    // Create zoom lens element
    const zoomLens = document.createElement('div');
    zoomLens.className = 'zoom-lens';
    zoomLens.style.display = 'none';
    document.body.appendChild(zoomLens);
    
    // Create zoom result element using background-image approach
    const zoomResult = document.createElement('div');
    zoomResult.className = 'zoom-result';
    zoomResult.style.display = 'none';
    zoomResult.style.backgroundImage = `url(${img.src})`;
    zoomResult.style.backgroundRepeat = 'no-repeat';
    document.body.appendChild(zoomResult);
    
    const zoomRatio = 5;
    const lensSize = 100;
    const resultSize = 400;
    
    architectureImage.addEventListener('mouseenter', () => {
      zoomLens.style.display = 'block';
      zoomResult.style.display = 'block';
      if (zoomHint) zoomHint.style.opacity = '0';
    });
    
    architectureImage.addEventListener('mouseleave', () => {
      zoomLens.style.display = 'none';
      zoomResult.style.display = 'none';
      if (zoomHint) zoomHint.style.opacity = '1';
    });
    
    architectureImage.addEventListener('mousemove', (e) => {
      const imgRect = img.getBoundingClientRect();
      
      // Calculate cursor position relative to image
      const x = e.clientX - imgRect.left;
      const y = e.clientY - imgRect.top;
      
      // Position lens centered on cursor
      zoomLens.style.left = (e.clientX - lensSize / 2) + 'px';
      zoomLens.style.top = (e.clientY - lensSize / 2) + 'px';
      
      // Calculate background position for zoom result
      // The background position should be negative of the cursor position multiplied by zoom ratio
      // Plus half the result size to center the zoomed area
      const bgX = -(x * zoomRatio - resultSize / 2);
      const bgY = -(y * zoomRatio - resultSize / 2);
      
      // Set background size to image size * zoom ratio
      zoomResult.style.backgroundSize = `${imgRect.width * zoomRatio}px ${imgRect.height * zoomRatio}px`;
      zoomResult.style.backgroundPosition = `${bgX}px ${bgY}px`;
      
      // Position result box near cursor
      zoomResult.style.left = (e.clientX + 20) + 'px';
      zoomResult.style.top = (e.clientY + 20) + 'px';
    });
  }

  console.log('IDP Enterprise Landing Page initialized');
});

