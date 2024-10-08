// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
    fadeInElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('load', checkFadeIn);
window.addEventListener('scroll', checkFadeIn);

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Back to top button functionality
const backToTopButton = document.querySelector('.floating-btn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block'; // Show button
    } else {
        backToTopButton.style.display = 'none'; // Hide button
    }
});

// Smooth scroll to top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scroll back to top
});

// Modal behavior - Open project modal
const projectCardsClickable = document.querySelectorAll('.project-card');

projectCardsClickable.forEach(card => {
    card.addEventListener('click', () => {
        const projectInfo = card.querySelector('p').innerText; // Assuming you have a description in a <p> tag
        openModal(projectInfo); // Function to display modal with project info
    });
});

// Function to open a modal
function openModal(info) {
    const modal = document.querySelector('#modal'); // Your modal element
    modal.querySelector('.modal-content').innerText = info; // Populate with project info
    modal.style.display = 'block'; // Show modal
}

// Close modal event listener
document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none'; // Hide modal
});

// Reset states on page load (handle back button issue)
window.addEventListener('pageshow', function() {
    const modal = document.querySelector('#modal');
    if (modal) {
        modal.style.display = 'none'; // Close modal on page show
    }

    // Reset active or visible project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.remove('show');
    });

    window.scrollTo(0, 0); // Scroll back to the top
});

// On page load - hide loader and make content visible
window.addEventListener('load', function() {
    document.body.style.visibility = 'visible'; // Make the page content visible after loading

    // Hide the loading spinner after the page is loaded
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; 
});
