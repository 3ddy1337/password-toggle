const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    btn.textContent = "Hide Password";
  } else {
    input.setAttribute("type", "password");
    btn.textContent = "Show Password";
  }
});
