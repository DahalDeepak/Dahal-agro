document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code to run after the DOM has loaded

    // Example: Change the color of the header on click
    const header = document.querySelector("header");
    header.addEventListener("click", function() {
        header.style.backgroundColor = "#ff0000"; // Change header color to red
    });

    // Example: Display an alert on clicking a link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            alert(`You clicked on "${link.textContent}"`);
        });
    });
});
