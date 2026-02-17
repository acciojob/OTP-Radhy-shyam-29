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

  // Move to next input
  if (index < inputs.length - 1) {
    inputs[index + 1].focus();
  }
});

// Backspace handling
container.addEventListener("keydown", function (e) {
  if (!e.target.classList.contains("code")) return;

  const index = Array.from(inputs).indexOf(e.target);

  if (e.key === "Backspace") {
    if (e.target.value === "" && index > 0) {
      inputs[index - 1].value = "";
      inputs[index - 1].focus();
    }
  }
});
