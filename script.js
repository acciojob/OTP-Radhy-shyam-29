const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      input.value = "";
      if (index > 0) inputs[index - 1].focus();
    } else if (e.key >= "0" && e.key <= "9") {
      input.value = ""; // replace current value
      setTimeout(() => {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }, 0);
    } else if (e.key !== "Tab") {
      e.preventDefault(); // prevent non-numeric input
    }
  });

  input.addEventListener("input", () => {
    // handle pasting multiple characters
    if (input.value.length > 1) {
      input.value = input.value.slice(0,1);
    }
  });
});

// Autofocus the first input on page load
inputs[0].focus();