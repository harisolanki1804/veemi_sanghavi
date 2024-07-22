const hamburger = document.querySelector('.menu-bar .hamburger');
const menu = document.querySelector('header .nav-links');

// Add an event listener to the hamburger menu button
hamburger.addEventListener('click', () => {
    // Toggle the active class on the hamburger menu button and the full-screen menu
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    // Toggle the FontAwesome icon
    const icon = hamburger.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});