// Toggle Mobile Navigation Navbar View
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Handle Scroll Events for Active Link & Sticky Headers
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar Execution
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Reset Mobile Nav View on Scroll Trigger
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Dynamic Typing Script Effect Simulation
const words = ["CAD Designer", "NX / SolidWorks Modeler"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typingSpeed = 100;
const targetSpan = document.querySelector('.typing-text');

function typeEffect() {
    let currentWord = words[wordIdx];
    if (isDeleting) {
        targetSpan.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        targetSpan.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }

    if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Wait at end of word
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(typeEffect, 500); // Break before starting new word
    } else {
        setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
}
document.addEventListener("DOMContentLoaded", () => setTimeout(typeEffect, 500));

// Interactive Filtering logic for Portfolio Services Section
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceBoxes = document.querySelectorAll('.services-box');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Manage active states on buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Toggle matching visibility configurations
        serviceBoxes.forEach(box => {
            if(filterValue === 'all' || box.getAttribute('data-category') === filterValue) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
