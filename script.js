/*Loading*/ 

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

/*Airpods Animation*/

document.addEventListener('DOMContentLoaded', function() {
  const loadingButton = document.querySelector('.loading-button');
  const loadingContainer = document.querySelector('.loading-container');
  const islandBar = document.querySelector('.island__bar');

  setTimeout(() => {
    loadingButton.classList.add('show');
  }, 100);

  setTimeout(() => {
    loadingContainer.style.display = 'none';
    setTimeout(() => {
      islandBar.classList.add('show-airpods');
    }, 500);
  }, 5000);
});
