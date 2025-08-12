// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
    });
});


This JavaScript code adds:

- A hamburger menu toggle functionality
- Smooth scrolling for anchor links

You'll also need to add some CSS to style the hamburger menu:


.hamburger {
    display: none;
    cursor: pointer;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #333;
        padding: 20px;
    }

    .nav-links.active {
        display: flex;
    }

    .hamburger {
        display: block;
    }
}
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});
