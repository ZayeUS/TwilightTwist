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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = 'visible';
        }
      });
    });
  
    observer.observe(document.querySelector('.services-section'));
  });