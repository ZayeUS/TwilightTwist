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
    e.preventDefault();
    var formData = new FormData(form);

    fetch("https://formspree.io/f/xqkryeko", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        form.reset(); // Reset the form for the next input
        responseContainer.innerHTML = "<p>Thank you for your submission!</p>";

         // Set timeout to clear the message after 5 seconds (5000 milliseconds)
         setTimeout(function() {
          responseContainer.innerHTML = "";
        }, 3000);
      } else {
        response.json().then(data => {
          if (data.errors) {
            responseContainer.innerHTML = "<p>" + data.errors.map(error => error.message).join(", ") + "</p>";
          } else {
            responseContainer.innerHTML = "<p>Oops! There was a problem with your submission.</p>";
          }
        })
      }
    })
    .catch(error => {
      responseContainer.innerHTML = "<p>Oops! There was a problem with your submission.</p>";
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var emailField = document.getElementById('email');
  var nameField = document.getElementById('name');
  var messageField = document.getElementById('message');

  emailField.addEventListener('input', function() {
      var feedback = document.getElementById('emailFeedback');
      if (emailField.validity.typeMismatch) {
          feedback.textContent = 'Please enter a valid email address.';
      } else {
          feedback.textContent = ''; // Clear feedback if valid
      }
  });

  // Add similar event listeners for 'nameField' and 'messageField' as needed
  // For example, checking if 'nameField' is empty:
  nameField.addEventListener('input', function() {
      var feedback = document.getElementById('nameFeedback');
      if (!nameField.value.trim()) {
          feedback.textContent = 'Please enter your name.';
      } else {
          feedback.textContent = ''; // Clear feedback if valid
      }
  });

  // You can add more specific validations for each field as per your requirements
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
