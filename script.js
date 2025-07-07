const islandBar = document.querySelector('.island__bar');

islandBar.addEventListener('click', () => {
  islandBar.classList.add('glitch');
  setTimeout(() => {
    islandBar.classList.remove('glitch');
  }, 500);
});