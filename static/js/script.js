document.addEventListener('DOMContentLoaded', () => {
    // Animation for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Theme toggle button
    const themeToggleButton = document.querySelector('.toggle-theme');
    if (themeToggleButton) {
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
            themeToggleButton.textContent = 'Light Mode';
        } else {
            themeToggleButton.textContent = 'Dark Mode';
        }

        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
                themeToggleButton.textContent = 'Light Mode';
            } else {
                localStorage.setItem('dark-mode', 'disabled');
                themeToggleButton.textContent = 'Dark Mode';
            }

            // Toggle icon
            const icon = themeToggleButton.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-sun');
                icon.classList.toggle('fa-moon');
            }
        });
    }

    // Navbar toggle button
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarToggler && navbarLinks) {
        navbarToggler.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    }
}); // script.js

function toggleNavbar() {
    const navbarLinks = document.getElementById('navbarLinks');
    if (navbarLinks.classList.contains('show')) {
        navbarLinks.classList.remove('show');
    } else {
        navbarLinks.classList.add('show');
    }
}