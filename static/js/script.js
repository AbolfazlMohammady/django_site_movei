document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.toggle-theme');
    const body = document.body;

    if (themeToggleButton) {
        const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
        body.classList.toggle('dark-mode', darkModeEnabled);
        themeToggleButton.textContent = darkModeEnabled ? 'Light Mode' : 'Dark Mode';

        themeToggleButton.addEventListener('click', () => {
            const isDarkMode = body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
            themeToggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        });
    }
});
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});