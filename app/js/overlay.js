(function() {
  // Disable overlay on mobile devices
  const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w < 1200) return;

  const overlay = document.getElementsByClassName("showcase__overlay")[0];
  const [...cards] = document.getElementsByClassName("long-card");
  
  cards.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
      e.classList.add("long-card--active"),
        overlay.classList.contains("showcase__overlay--active") ||
          overlay.classList.add("showcase__overlay--active");
    }),
      e.addEventListener("mouseleave", function() {
        e.classList.remove("long-card--active"),
          overlay.classList.contains("showcase__overlay--active") &&
            overlay.classList.remove("showcase__overlay--active");
      });
  });
})();