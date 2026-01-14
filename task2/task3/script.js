const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// We will build a string like "5+5" and calculate it
let currentInput = "";

// Loop through all buttons to add Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {

        // Check if the button is a number or dot
        if (button.hasAttribute('data-value')) {
            const value = button.getAttribute('data-value');
            currentInput += value;
            display.value = currentInput;
        }

        // Check if the button is an operator or action
        if (button.hasAttribute('data-action')) {
            const action = button.getAttribute('data-action');

            if (action === 'clear') {
                // Clear the screen
                currentInput = "";
                display.value = "";
            }
            else if (action === 'backspace') {
                // Remove the last character
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            }
            else {
                // It's an operator (+, -, *, /)
                // Add it to the input string
                currentInput += action;
                display.value = currentInput;
            }
        }
    });
});

// Handle the Equals (=) button separately
document.getElementById('equals').addEventListener('click', () => {
    try {
        // Use Javascript's built-in math evaluator
        // NOTE: In a real advanced app, we might write our own math parser for safety.
        // But for a beginner project, eval() is acceptable.

        if (currentInput === "") return;

        const result = eval(currentInput);

        display.value = result;
        currentInput = result.toString(); // Store result so we can keep doing math
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
});