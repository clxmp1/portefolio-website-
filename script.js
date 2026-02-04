// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Navigation Background Fade on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.opacity = '0.95';
    } else {
        header.style.opacity = '1';
    }
});

// Mobile Menu Toggle Logic (Optional Enhancement)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        // You could add a class here to toggle a mobile menu visibility
        alert("Mobile menu functionality can be expanded here!");
    });
}