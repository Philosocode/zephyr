(function() {
  const checkbox = document.getElementsByClassName("navigation__checkbox")[0];
  const nav = document.getElementsByClassName("navigation")[0];
  const navList = document.getElementsByClassName("navigation__list")[0];

  // Hide/show nav at section/about
  const navWaypoint = new Waypoint({
    element: document.getElementById("about"),
    handler: function(direction) {
      console.log("Waypoint reached");
      if (direction === "down") {
        nav.classList.remove("navigation__hidden");
      } else {
        nav.classList.add("navigation__hidden");

        if (checkbox.checked) {
          checkbox.checked = false;
        }
      }
    }
  });

  // Disable scroll if nav open. Enable scroll if nav closed.
  checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
      toggleScroll("disable");
    } else {
      toggleScroll("enable");
    }
  });

  // Close nav and re-enable scroll when clicking on a link
  navList.addEventListener("click", function() {
    checkbox.checked = false;
    toggleScroll("enable");
  });

  function toggleScroll(scrollState) {
    const targetElement = document.getElementsByClassName("navigation__nav")[0];

    if (scrollState === "enable") {
      bodyScrollLock.enableBodyScroll(targetElement);
    } else if (scrollState === "disable") {
      bodyScrollLock.disableBodyScroll(targetElement);
    }
  }
})();
