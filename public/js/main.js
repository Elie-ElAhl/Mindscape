// Mobile menu toggle
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Close mobile menu after clicking a link
document.querySelectorAll("#mobile-menu a").forEach((a) => {
  a.addEventListener("click", () => {
    if (mobileMenu) mobileMenu.classList.add("hidden");
  });
});

// Active link highlighting based on current path
const currentPath = window.location.pathname; // "/", "/about", etc.
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  const isHome = currentPath === "/" && href === "/";
  const isMatch = href === currentPath || isHome;

  if (isMatch) link.classList.add("nav-link-active");
  else link.classList.remove("nav-link-active");
});
