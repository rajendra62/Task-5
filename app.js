class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkBrowserCompatibility();
        this.setupAnimations();
    }

    setupEventListeners() {
        document.addEventListener('click', this.handleClicks.bind(this));
        document.addEventListener('DOMContentLoaded', () => {
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
    }

    handleClicks(e) {
        // Handle all click events
    }

    checkBrowserCompatibility() {
        // Feature detection
        if (!('fetch' in window)) {
            console.warn('Fetch API not supported');
        }
    }

    setupAnimations() {
        // Animate task cards on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {threshold: 0.1});

        document.querySelectorAll('.task-card, .hero').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize app
new App();