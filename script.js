//your JS code here. If required.
const mainDiv = document.getElementById("main-container");

// Heading
const heading = document.createElement("h1");
heading.id = "verification_heading";
heading.innerText = "Verify Your Account";
mainDiv.appendChild(heading);

// Subheading
const para = document.createElement("p");
para.id = "verification_subtext";
para.innerText =
  "Enter the 6 digit code sent to your email to verify your account.";
mainDiv.appendChild(para);

// OTP Container
const otpdiv = document.createElement("div");
otpdiv.className = "code-container";
mainDiv.appendChild(otpdiv);

// Create 6 Inputs
for (let i = 0; i < 6; i++) {
  const input = document.createElement("input");
  input.className = "code";
  input.id = `code-${i + 1}`;   // 🔥 REQUIRED FOR TEST
  input.type = "text";
  input.maxLength = 1;
  otpdiv.appendChild(input);
}

const inputs = document.querySelectorAll(".code");

// Forward typing
otpdiv.addEventListener("input", function (e) {
  if (!e.target.matches(".code")) return;

  const index = Array.from(inputs).indexOf(e.target);
  const value = e.target.value;

  // Allow only digits
  if (!(value >= "0" && value <= "9")) {
    e.target.value = "";
    return;
  }

  // Move to next input
  if (index < inputs.length - 1 && value !== "") {
    inputs[index + 1].focus();
  }
});

// Backspace handling
otpdiv.addEventListener("keydown", function (e) {
  if (!e.target.matches(".code")) return;

  const index = Array.from(inputs).indexOf(e.target);

  if (e.key === "Backspace") {
    if (e.target.value === "" && index > 0) {
      inputs[index - 1].value = "";   // 🔥 required for deletion test
      inputs[index - 1].focus();
    }
  }
});
