document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Apple-style scroll reveal with staggered animation support
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach((el) => {
        observer.observe(el);
    });

    // Stagger animation for grid feature cards
    const featureCards = document.querySelectorAll('.feature-grid .card');
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.12}s`;
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
