const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        display.value = eval(display.value); // Note: eval is not safe for production
      } catch {
        display.value = "Error";
      }
    } else if (value === "C") {
      display.value = ""; // Clear the input
    } else {
      display.value += value; // Add the clicked value
    }
  });
});


