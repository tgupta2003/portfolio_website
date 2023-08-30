document.addEventListener('DOMContentLoaded', function() {


// TO SHOW THE TEXT ONLY WHEN THE BANNER HAS BEEN DROPPED DOWN
const portfolioButton = document.querySelector('.portfolio-button');
const portfolioOverlay = document.querySelector('.portfolio-overlay');
const overlayLink = document.querySelector('.overlay-link');
const portfolioLinks = document.querySelector('.port-links');


// THE DELAY TIME 
const delay = 1002;
const delay2 = 1000; 
let timeoutId;

//CLICKING ON BUTTONS/LOGOS/TEXT TO OPEN NEW PAGES: IMP: MAKE SURE TO HAVE THESE
// FUNCTIONS BE INSIDE DOMCONTENTLOADED FUNCTION!!!

//LOGO
// document.getElementById("top-logo").addEventListener("click", function() {
//   window.location.href = "home.html";
// });

//PORTFOLIO LINKS-END OF PAGE
// document.getElementById("a+f-link").addEventListener("click", function() {
//   window.location.href = "animation+film.html";
// });


//---------------------------------------------------

  portfolioButton.addEventListener('mouseover', function() {
    clearTimeout(timeoutId);
    portfolioOverlay.style.display = 'block';
    portfolioOverlay.style.height = '65%';
    // overlayLink.style.display = 'block';
    portfolioLinks.style.display = 'flex'; 

  });

  portfolioOverlay.addEventListener('mouseover', function() {
    clearTimeout(timeoutId);
    portfolioOverlay.style.display = 'block';
    portfolioOverlay.style.height = '65%';
    // overlayLink.style.display = 'block';
    portfolioLinks.style.display = 'flex'; 

  });

  portfolioOverlay.addEventListener('mouseout', function() {
    // portfolioOverlay.style.display = 'none';
    // portfolioOverlay.style.height = '0';
    // overlayLink.style.display = 'none';
    timeoutId = setTimeout(function() {
        portfolioOverlay.style.height = '0';
        portfolioLinks.style.display = 'none'; 
        // overlayLink.style.display = 'none';
        setTimeout(function() {
          portfolioOverlay.style.display = 'none';
    
        }, 1000); // Adjust the duration of the transition in milliseconds
      }, 1000);
  });



//  PAGE-END APPEARANCE
const graphic = document.querySelector('.page-end');

function checkScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const bodyHeight = document.body.offsetHeight;
  
    // Adjust the threshold as needed
    const threshold = 0;
  
    if (windowHeight + scrollY >= bodyHeight - threshold) {
      // Add the 'appear' class to show the graphic
      graphic.classList.add('appear');
    }
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', checkScroll);



  




});

// -------------------------------------------------------------------










