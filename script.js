// Get the dark / light mode button
const themeButton = document.getElementById("theme-toggle");

// When the button is clicked, switch between dark and light mode
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // Update the button text to show the next mode
  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});
