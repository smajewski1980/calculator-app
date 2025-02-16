const themeToggle = document.querySelector(".toggle");
let themeTogglePosition = 1;

function handleThemeToggle() {
  updatethemeTogglePosition();
  themeTogglePosition === 3 ? (themeTogglePosition = 1) : themeTogglePosition++;
}

function updatethemeTogglePosition() {
  switch (themeTogglePosition) {
    case 1: {
      themeToggle.style.paddingLeft = "1.25rem";
      document.documentElement.dataset.theme = "dark";
      break;
    }
    case 2: {
      themeToggle.style.paddingLeft = "2.35rem";
      document.documentElement.dataset.theme = "custom";
      break;
    }
    case 3: {
      themeToggle.style.padding = ".125rem";
      document.documentElement.dataset.theme = "light";
      break;
    }
  }
}

themeToggle.addEventListener("click", handleThemeToggle);
