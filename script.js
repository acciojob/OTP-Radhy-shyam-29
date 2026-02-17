const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

  input.addEventListener("input", function () {

    // allow only digits
    if (!(this.value >= "0" && this.value <= "9")) {
      this.value = "";
      return;
    }

    // move forward immediately
    if (this.value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", function (e) {

    if (e.key === "Backspace") {

      // move to previous immediately
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

});
