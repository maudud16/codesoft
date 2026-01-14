// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Listen for a click on the button
toggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');

    // Optional: Change button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = "Light Mode";
    } else {
        toggleButton.textContent = "Dark Mode";
    }
});