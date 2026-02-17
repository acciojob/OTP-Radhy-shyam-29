const inputs = document.querySelectorAll(".code");
const container = document.querySelector(".code-container");

// Forward typing
container.addEventListener("input", function (e) {
  if (!e.target.classList.contains("code")) return;

  const index = Array.from(inputs).indexOf(e.target);
  const value = e.target.value;

  // Allow only digits
  if (!(value >= "0" && value <= "9")) {
    e.target.value = "";
    return;
  }

  // Move focus to next input
  if (index < inputs.length - 1) {
    inputs[index + 1].focus();
  }
});

// Backspace handling (FULL correct logic)
container.addEventListener("keydown", function (e) {
  if (!e.target.classList.contains("code")) return;

  const index = Array.from(inputs).indexOf(e.target);

  if (e.key === "Backspace") {

    // CASE 1: If current has value → clear it only
    if (e.target.value !== "") {
      e.target.value = "";
      return;
    }

    // CASE 2: If already empty → move to previous and clear
    if (index > 0) {
      inputs[index - 1].value = "";
      inputs[index - 1].focus();
    }
  }
});
