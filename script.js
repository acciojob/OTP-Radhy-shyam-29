const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

  input.addEventListener("keyup", function (e) {

    // Allow only digits
    if (this.value && !(this.value >= "0" && this.value <= "9")) {
      this.value = "";
      return;
    }

    // Forward move
    if (e.key !== "Backspace" && this.value !== "") {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }

    // Backspace logic
    if (e.key === "Backspace") {

      if (this.value === "" && index > 0) {
        inputs[index - 1].value = "";
        inputs[index - 1].focus();
      }
    }

  });

});
