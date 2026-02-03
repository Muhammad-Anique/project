/**
 * Fitness360 Gym - Main JavaScript File
 * Handles core functionality, navigation, animations, and user interactions
 */

// ============================================================================
// Application Initialization
// ============================================================================

class Fitness360App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        console.log('🏋️‍♂️ Fitness360 Gym - Initializing...');
        
        // Initialize all components
        Navigation.init();
        ScrollEffects.init();
        Forms.init();
        Animations.init();
        LazyLoading.init();
        
        console.log('✅ Fitness360 Gym - Initialized successfully!');
    }
}

// ============================================================================
// Navigation Component
// ============================================================================

const Navigation = {
    init() {
        this.mobileToggle = document.querySelector('.nav__toggle');
        this.navList = document.querySelector('.nav__list');
        this.navLinks = document.querySelectorAll('.nav__link');
        this.header = document.querySelector('.header');
        
        this.bindEvents();
        this.setActiveLink();
        this.handleScroll();
    },

    bindEvents() {
        // Mobile menu toggle
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close mobile menu when clicking on links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Handle scroll for header styling
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileToggle?.contains(e.target) && !this.navList?.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    },

    toggleMobileMenu() {
        this.navList?.classList.toggle('nav__list--open');
        this.mobileToggle?.classList.toggle('nav__toggle--open');
        
        // Toggle body scroll
        document.body.style.overflow = 
            this.navList?.classList.contains('nav__list--open') ? 'hidden' : '';
    },

    closeMobileMenu() {
        this.navList?.classList.remove('nav__list--open');
        this.mobileToggle?.classList.remove('nav__toggle--open');
        document.body.style.overflow = '';
    },

    setActiveLink() {
        const currentPath = window.location.pathname;
        
        this.navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            
            if (link.getAttribute('href') === currentPath || 
                (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
                link.classList.add('nav__link--active');
            }
        });
    },

    handleScroll() {
        if (this.header) {
            if (window.scrollY > 50) {
                this.header.classList.add('header--scrolled');
            } else {
                this.header.classList.remove('header--scrolled');
            }
        }
    }
};

// ============================================================================
// Scroll Effects Component
// ============================================================================

const ScrollEffects = {
    init() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.setupIntersectionObserver();
        this.setupSmoothScrolling();
    },

    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-in, .slide-up, .slide-left, .slide-right, .scale-in'
        );
        
        animatedElements.forEach(el => observer.observe(el));
    },

    setupSmoothScrolling() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// ============================================================================
// Forms Component
// ============================================================================

const Forms = {
    init() {
        this.contactForms = document.querySelectorAll('.contact-form');
        this.subscriptionForms = document.querySelectorAll('.subscription-form');
        
        this.bindFormEvents();
    },

    bindFormEvents() {
        // Contact forms
        this.contactForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                this.handleContactForm(e);
            });
        });

        // Subscription forms
        this.subscriptionForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                this.handleSubscriptionForm(e);
            });
        });

        // Real-time validation
        const formInputs = document.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    },

    handleContactForm(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        if (!this.validateForm(form)) {
            this.showMessage('Please fix the errors before submitting.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            this.showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    },

    handleSubscriptionForm(e) {
        e.preventDefault();
        
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value;
        
        if (!this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show success message
        this.showMessage('Successfully subscribed to our newsletter!', 'success');
        form.reset();
    },

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    },

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            errorMessage = 'This field is required.';
            isValid = false;
        }
        
        // Email validation
        else if (field.type === 'email' && value && !this.validateEmail(value)) {
            errorMessage = 'Please enter a valid email address.';
            isValid = false;
        }
        
        // Phone validation
        else if (field.type === 'tel' && value && !this.validatePhone(value)) {
            errorMessage = 'Please enter a valid phone number.';
            isValid = false;
        }
        
        // Minimum length validation
        else if (field.minLength && value.length < field.minLength) {
            errorMessage = `Must be at least ${field.minLength} characters.`;
            isValid = false;
        }

        // Update field appearance
        if (isValid) {
            field.classList.remove('error');
            this.removeFieldError(field);
        } else {
            field.classList.add('error');
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    },

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    validatePhone(phone) {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    },

    showFieldError(field, message) {
        this.removeFieldError(field);
        
        const errorEl = document.createElement('div');
        errorEl.className = 'field-error';
        errorEl.textContent = message;
        
        field.parentNode.appendChild(errorEl);
    },

    removeFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    },

    showMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());

        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message--${type}`;
        messageEl.textContent = message;
        
        // Insert at top of body
        document.body.insertAdjacentElement('afterbegin', messageEl);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
};

// ============================================================================
// Animations Component
// ============================================================================

const Animations = {
    init() {
        this.setupCounters();
        this.setupParallax();
        this.setupHoverEffects();
    },

    setupCounters() {
        const counters = document.querySelectorAll('.counter');
        
        if (!counters.length) return;

        const countUp = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60 FPS
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            };

            updateCounter();
        };

        // Intersection observer for counters
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    countUp(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    },

    setupParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        if (!parallaxElements.length) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translate3d(0, ${rate}px, 0)`;
            });
        });
    },

    setupHoverEffects() {
        // Card hover effects
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
};

// ============================================================================
// Lazy Loading Component
// ============================================================================

const LazyLoading = {
    init() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for browsers without Intersection Observer
            this.loadAllImages();
            return;
        }

        this.imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    this.imageObserver.unobserve(entry.target);
                }
            });
        });

        this.observeImages();
    },

    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => this.imageObserver.observe(img));
    },

    loadImage(img) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
        
        img.onload = () => {
            img.classList.add('fade-in');
        };
    },

    loadAllImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => this.loadImage(img));
    }
};

// ============================================================================
// Utility Functions
// ============================================================================

const Utils = {
    // Debounce function for performance optimization
    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Get element offset from top
    getOffset(element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// ============================================================================
// Initialize Application
// ============================================================================

// Create and initialize the application
const app = new Fitness360App();

// Make components available globally for debugging
window.Fitness360 = {
    app,
    Navigation,
    ScrollEffects,
    Forms,
    Animations,
    LazyLoading,
    Utils
};