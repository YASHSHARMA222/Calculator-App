const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentInput = "";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (value == "%") {
      currentInput = eval(currentInput) / 100;
    } else if (value === "=") {
      if (currentInput == "") {
      } else {
        try {
          currentInput = eval(currentInput).toString();
        } catch {
          currentInput = "Error";
        }
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
