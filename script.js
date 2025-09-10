const islandBar = document.querySelector('.island__bar');

islandBar.addEventListener('click', () => {
  islandBar.classList.add('glitch');
  setTimeout(() => {
    islandBar.classList.remove('glitch');
  }, 500);
});

// /*Loading*/ 

document.addEventListener('DOMContentLoaded', function() {
  const loadingButton = document.querySelector('.loading-button');
  const loadingContainer = document.querySelector('.loading-container');
  
  setTimeout(() => {
    loadingButton.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    loadingContainer.style.display = 'none';
  }, 3000); 
});
