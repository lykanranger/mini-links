// LOADING ANIMATION

document.addEventListener('DOMContentLoaded', function() {
  const loadingContainer = document.querySelector('.loading-container');
  const islandBar = document.querySelector('.island__bar');

  setTimeout(() => {
    loadingContainer.style.opacity = '0';
    
    setTimeout(() => {
      loadingContainer.style.display = 'none';
      
      setTimeout(() => {
        islandBar.classList.add('show-airpods');
      }, 2500);
      
    }, 500);
    
  }, 4500);
});

// TYPING ANIMATION

var typed = new Typed('.typing-text', {
    strings: ['Designed by <span class="highlight-name">Karun</span>', '© 2025 All Rights Reserved'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    contentType: 'html'
  });
