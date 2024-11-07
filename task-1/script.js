// Get the elements we need
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// Function to handle resizing
function resize() {
  // Check the viewport width
  if (window.innerWidth <= 768) {
    // Mobile layout
    header.style.display = 'block';
    main.style.display = 'block';
    footer.style.display = 'block';
  } else {
    // Desktop layout
    header.style.display = 'flex';
    main.style.display = 'flex';
    footer.style.display = 'flex';
  }
}

// Call the resize function initially
resize();

// Add an event listener for window resize
window.addEventListener('resize', resize);
