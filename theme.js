(function () {
  "use strict";

  var STORAGE_KEY = "arquiquiz_theme";
  var currentTheme = "dark";

  try {
    var savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      currentTheme = savedTheme;
    }
  } catch (e) { /* localStorage may be unavailable */ }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;

    var button = document.getElementById("theme-toggle");
    if (button) {
      var switchingToLight = theme === "dark";
      button.innerHTML = switchingToLight
        ? '<span aria-hidden="true">&#9728;&#65039;</span><span>Light</span>'
        : '<span aria-hidden="true">&#127769;</span><span>Dark</span>';
      button.setAttribute(
        "aria-label",
        switchingToLight ? "Switch to light mode" : "Switch to dark mode"
      );
      button.setAttribute("title", button.getAttribute("aria-label"));
      button.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }
  }

  function setTheme(theme) {
    applyTheme(theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
  }

  function createToggle() {
    if (document.getElementById("theme-toggle")) return;

    var button = document.createElement("button");
    button.type = "button";
    button.id = "theme-toggle";
    button.className = "theme-toggle";
    button.addEventListener("click", function () {
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });
    document.body.appendChild(button);
    applyTheme(currentTheme);
  }

  applyTheme(currentTheme);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createToggle);
  } else {
    createToggle();
  }

  window.addEventListener("storage", function (event) {
    if (event.key === STORAGE_KEY && (event.newValue === "light" || event.newValue === "dark")) {
      applyTheme(event.newValue);
    }
  });
})();
