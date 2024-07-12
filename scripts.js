document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skills-grid .skill, h2');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
    });

    let debounceTimer;
    window.addEventListener('scroll', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const scrollPosition = window.scrollY + window.innerHeight;
            animatedElements.forEach(element => {
                if (scrollPosition > element.offsetTop) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                    element.style.transition = 'all 0.4s ease-out';
                }
            });
        }, 100);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Show confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
    // Clear form fields
    document.getElementById('contactForm').reset();
});
