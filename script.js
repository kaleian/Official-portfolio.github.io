document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animate Elements on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animation classes to sections
    document.querySelectorAll('section').forEach((section, index) => {
        if (index > 0) { // Skip hero section
            section.classList.add('animate-on-scroll');
        }
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Project Carousel
    const carouselTrack = document.querySelector('.carousel-track');
    const projectCards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const cardWidth = projectCards[0].offsetWidth + 32; // width + gap
    
    // Clone first few cards for infinite scroll effect
    const firstFewCards = Array.from(projectCards).slice(0, 3);
    firstFewCards.forEach(card => {
        const clone = card.cloneNode(true);
        carouselTrack.appendChild(clone);
    });
    
    // Carousel navigation
    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > projectCards.length) {
            currentIndex = 0;
            carouselTrack.style.transition = 'none';
            updateCarousel();
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.5s ease';
                currentIndex = 1;
                updateCarousel();
            }, 10);
        } else {
            carouselTrack.style.transition = 'transform 0.5s ease';
            updateCarousel();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = projectCards.length;
            carouselTrack.style.transition = 'none';
            updateCarousel();
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.5s ease';
                currentIndex = projectCards.length - 1;
                updateCarousel();
            }, 10);
        } else {
            currentIndex--;
            carouselTrack.style.transition = 'transform 0.5s ease';
            updateCarousel();
        }
    });
    
    // Auto-rotate carousel
    let carouselInterval = setInterval(() => {
        nextBtn.click();
    }, 5000);
    
    // Pause on hover
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselTrack.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            nextBtn.click();
        }, 5000);
    });

    // Skill Progress Bars Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }
    
    // Intersection Observer for progress bars
    const skillsSection = document.querySelector('#skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);

    // Form Submission with Animation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="lni lni-spinner lni-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                // Success animation
                submitButton.innerHTML = '<i class="lni lni-checkmark-circle"></i> Sent!';
                submitButton.style.backgroundColor = '#4CAF50';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.innerHTML = originalText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success';
                    successMessage.innerHTML = `
                        <i class="lni lni-checkmark-circle"></i>
                        <p>Your message has been sent successfully! I'll get back to you soon.</p>
                    `;
                    
                    // Remove any existing success message
                    const existingMessage = contactForm.querySelector('.form-success');
                    if (existingMessage) {
                        existingMessage.remove();
                    }
                    
                    contactForm.appendChild(successMessage);
                    
                    // Remove message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }, 1500);
        });
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Scroll Reveal Animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });
    
    scrollReveal.reveal('.hero-content, .hero-image', { 
        origin: 'left',
        interval: 200 
    });
    
    scrollReveal.reveal('.about-grid > *', { 
        origin: 'bottom',
        interval: 200 
    });
    
    scrollReveal.reveal('.skill-item', { 
        interval: 100 
    });

    // Particle Background for Hero Section
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#E94560" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#E94560", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // Theme Toggle
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="lni lni-night"></i>';
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        this.innerHTML = document.body.classList.contains('light-theme') ? 
            '<i class="lni lni-sun"></i>' : '<i class="lni lni-night"></i>';
            
        // Save preference to localStorage
        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="lni lni-sun"></i>';
    }
});