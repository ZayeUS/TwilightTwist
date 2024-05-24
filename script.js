function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".hamburger-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuIcon.classList.remove("open");
    } else {
        menu.style.display = "block";
        menuIcon.classList.add("open");
    }
}


let lastScrollTop = 0; // Keep track of the last scroll position

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate the new background size
    let newSize = 100 + currentScroll / 10;

    // Optional: Limit the maximum size to prevent the background from zooming in too much
    newSize = Math.min(newSize, 150); // Adjust 150% as the maximum zoom limit as needed

    // Apply the new background size if scrolling down
    if (currentScroll > lastScrollTop){
        document.querySelector('.hero').style.backgroundSize = `${newSize}%`;
    } else {
        // Optional: Reset to default when scrolling up or add any specific behavior
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, { passive: true }); // Improve performance by marking the listener as passive



document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contactForm");
  var responseContainer = document.getElementById("formResponse");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    var formData = new FormData(form);

    fetch("https://formspree.io/f/xqkryeko", { // Your actual endpoint here
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        form.reset(); // Reset the form for the next input
        
        // Update for elegant display with icon
        responseContainer.innerHTML = "<p>Thank you for your submission!</p>";
        responseContainer.style.display = "block"; // Make the response visible
        responseContainer.style.opacity = "1"; // Reset opacity in case it was faded out before

        // Optional: Hide the message after a few seconds
        setTimeout(function() {
          responseContainer.style.opacity = "0";
          setTimeout(function() {
            responseContainer.style.display = "none";
          }, 500); // Wait for the fade-out to finish
        }, 3000); // Adjust time as needed
      } else {
        // Handle errors or unsuccessful submissions
      }
    })
    .catch(error => {
      // Handle network errors
    });
  });
});


var mySwiper = new Swiper('.mySwiper', {
  spaceBetween: 3, // Remove space between slides for a continuous look
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 0, // No delay for continuous movement
    disableOnInteraction: false,
    speed: 2000, // Adjust speed to control flow, higher for slower movement
  },
  speed: 2000, // Match the speed here
  slidesPerView: 'auto', // Adjust based on number of slides to view at once
  allowTouchMove: false, // Disables swiping to keep the flow constant
});




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
  });

  window.addEventListener('scroll', () => {
      if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
      }
  });
});
