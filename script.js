// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Projects Carousel Logic
    const carouselTrack = document.querySelector('.carousel-track');
    const projects = document.querySelectorAll('.project-card');
    
    // Clone projects for infinite scroll effect
    const cloneProjects = Array.from(projects).map(project => project.cloneNode(true));
    cloneProjects.forEach(clone => carouselTrack.appendChild(clone));

    // Pause animation on hover
    carouselTrack.addEventListener('mouseenter', () => {
        carouselTrack.style.animationPlayState = 'paused';
    });

    carouselTrack.addEventListener('mouseleave', () => {
        carouselTrack.style.animationPlayState = 'running';
    });

    // Active project detection
    function updateActiveProject() {
        const viewportCenter = window.innerWidth / 2;
        
        document.querySelectorAll('.project-card').forEach(project => {
            const rect = project.getBoundingClientRect();
            const projectCenter = rect.left + rect.width/2;
            
            // Calculate distance from viewport center
            const distance = Math.abs(projectCenter - viewportCenter);
            
            // Scale projects based on proximity to center
            const scale = 1 - Math.min(distance / viewportCenter, 0.2);
            project.style.transform = `scale(${scale})`;
            
            // Add active class to centered project
            if(distance < rect.width/2) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
    }

    // Update project states periodically
    let animationFrame;
    function animate() {
        updateActiveProject();
        animationFrame = requestAnimationFrame(animate);
    }
    animate();

    // Cleanup animation frame on unmount
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrame);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        carouselTrack.style.animation = 'none';
        void carouselTrack.offsetHeight; // Trigger reflow
        carouselTrack.style.animation = '';
    });
});
