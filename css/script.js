// Simple JS functionality to log which link was clicked.
const links = document.querySelectorAll('.circle-link');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        alert(`You clicked on ${link.textContent}`);
    });
});
