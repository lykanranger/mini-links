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

var year = new Date().getFullYear();

var typed = new Typed('.typing-text', {
  strings: [
    'Created by <span class="highlight-name">Karun</span>',
    `© ${year} All Rights Reserved`
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  contentType: 'html'
});

// SCROLL DOWN 

window.addEventListener('scroll', function() {
  const scrollHint = document.getElementById('scroll-hint');
  
  if (window.scrollY > 5) {
    scrollHint.classList.add('hidden');
  } else {
    scrollHint.classList.remove('hidden');
  }
});
