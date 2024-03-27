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


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return; // Stop the function if validation fails
  }

  // Further validation can go here (e.g., email format)

  // If all checks pass
  alert('Thank you for your message!');
  // Here, you would typically also send the form data to the server
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent traditional form submission

  const formData = new FormData(this);

  fetch('twilighttwistphotobooths@gmail.com', {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log(data);
    alert('Thank you for your message! We will get back to you soon.');
    // Optionally reset the form or redirect the user
  })
  .catch(error => console.error('There was a problem with your fetch operation:', error));
});
