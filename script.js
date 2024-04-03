// Save element from HTML into JS variables
const input = document.getElementById("input");
const btn = document.getElementById("button");

// State
let showPassword = false;

// HTML update
function render() {
  if (showPassword) {
    input.setAttribute("type", "text");
    btn.textContent = "Hide Password";
  } else {
    input.setAttribute("type", "password");
    btn.textContent = "Show Password";
  }
}

// Event Listener
btn.addEventListener("click", () => {
  showPassword = !showPassword;
  render();
});
