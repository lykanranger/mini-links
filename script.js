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

