window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {
      intro.style.display = "none";
      site.classList.remove("hidden");
    }, 1000);
  }, 2500);
});