 document.addEventListener("DOMContentLoaded", function () {
    // Get the display element
            var display = document.getElementById("display");

            // Function to update the display
            function updateDisplay(value) {
                display.value = value;
            }

            // Function to clear the display
            function clearDisplay() {
                display.value = "";
            }

            // Function to handle backspace
            function backspace() {
                var currentValue = display.value;
                display.value = currentValue.slice(0, -1);
            }

            // Function to handle appending to the display
            function appendToDisplay(input) {
                display.value += input;
            }

            // Function to perform calculation
            function calculate() {
                try {
                    var result = eval(display.value);
                    if (result !== undefined) {
                      updateDisplay(result);
                    } else {
                      updateDisplay("Error");
                    }
                    
                } catch (error) {
                    updateDisplay("Error");
                }
            }

            // Function to display a warning alert
            function displayWarning() {
                alert("Only numbers  are allowed!");
            }

            // Attach event listeners to the buttons
            document.querySelectorAll(".btn").forEach(function (button) {
                button.addEventListener("click", function () {
                    var buttonText = this.textContent;

                    switch (buttonText) {
                        case "C":
                            clearDisplay();
                            break;
                        case "<-":
                            backspace();
                            break;
                        case "=":
                            calculate();
                            break;
                        default:
                            appendToDisplay(buttonText);
                            break;
                    }
                });
            });

            // Attach event listener to handle key presses
            document.addEventListener("keydown", function (event) {
                var key = event.key;

                // Check if the pressed key is not a number, operator, or specific control key
                if (!/[\d+\-*/.=]|Backspace|Enter|Escape/.test(key)) {
                    displayWarning();
                }
            });
        });
    