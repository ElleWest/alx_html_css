// Peer-aligned hamburger menu script for mobile navigation
// Peer-aligned hamburger menu script for mobile navigation
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
});
