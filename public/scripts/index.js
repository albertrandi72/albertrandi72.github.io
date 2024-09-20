let headerNav = document.querySelector("#header-nav");

document.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    headerNav.classList.add("scrolled");
  } else {
    headerNav.classList.remove("scrolled");
  }
});
