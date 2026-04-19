// LOADING ANIMATION

document.addEventListener('DOMContentLoaded', function () {
  const loadingContainer = document.querySelector('.loading-container');
  const helloDiv = document.querySelector('.hello__div');
  const islandBar = document.querySelector('.island__bar');

  setTimeout(() => {
    helloDiv.classList.add('hide-hello');
  }, 4000);

  setTimeout(() => {
    loadingContainer.style.opacity = '0';
  }, 4000);

  setTimeout(() => {
    loadingContainer.style.display = 'none';
    islandBar.classList.add('show-airpods');
  }, 6700);
});

// TYPING ANIMATION

var year = new Date().getFullYear();

var typed = new Typed('.typing-text', {
  strings: [
    'Created by Karun',
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

// PARTICLES.JS INITIALIZATION

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#000000", "#777777"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    }
  },
  "retina_detect": true
});
