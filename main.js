// Get all necessary elements
const leftSidebar = document.getElementById('left-sidebar');
const rightSidebar = document.getElementById('right-sidebar');
const mainContent = document.getElementById('main-content');
const leftToggle = document.getElementById('left-toggle');
const rightToggle = document.getElementById('right-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');

// Function to close all menus
const closeAllMenus = () => {
    leftSidebar.classList.remove('show');
    rightSidebar.classList.remove('show');
    mobileOverlay.classList.remove('show');
};

// Left sidebar toggle
leftToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        rightSidebar.classList.remove('show');
        leftSidebar.classList.toggle('show');
        mobileOverlay.classList.toggle('show');
    } else {
        leftSidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('left-expanded');
    }
});

// Right sidebar toggle
rightToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isMobile = window.innerWidth <= 992;

    if (isMobile) {
        leftSidebar.classList.remove('show');
        rightSidebar.classList.toggle('show');
        mobileOverlay.classList.toggle('show');
    } else {
        rightSidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('right-expanded');
    }
});

// Handle overlay click
mobileOverlay.addEventListener('click', () => {
    closeAllMenus();
});

// Close menus when clicking outside
document.addEventListener('click', (e) => {
    if (
        !leftSidebar.contains(e.target) &&
        !rightSidebar.contains(e.target) &&
        !leftToggle.contains(e.target) &&
        !rightToggle.contains(e.target)
    ) {
        closeAllMenus();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeAllMenus();
        leftSidebar.classList.remove('collapsed');
    }
    if (window.innerWidth > 992) {
        rightSidebar.classList.remove('collapsed');
    } else {
        // Collapse both sidebars on smaller screens
        leftSidebar.classList.add('collapsed');
        rightSidebar.classList.add('collapsed');
    }
});

// On page load
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 992) {
        leftSidebar.classList.add('collapsed');
        rightSidebar.classList.add('collapsed');
    }
});
