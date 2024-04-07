export function initializeCalculator() {
    const moduleThreeBackground = document.querySelector('#moduleThreeBackground');
    if (!moduleThreeBackground.querySelector('#calculator')) {
        const calculatorHTML = `
            <div id="calculator">
                <input type="text" id="calculatorInput">
                <div id="calculatorBody"></div>
            </div>`;
        moduleThreeBackground.innerHTML = calculatorHTML;
        createCalculatorButtons();
    }
}

function createCalculatorButtons() {
    const calculatorBody = document.querySelector('#calculatorBody');
    const calculatorInput = document.querySelector('#calculatorInput');
    // Assuming buttonArr and other related logic is moved into this file as well
    // Example button creation and event binding:
    const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    buttonArr.forEach(buttonLabel => {
        const button = document.createElement('button');
        button.textContent = buttonLabel;
        button.addEventListener('click', () => calculatorButtonClicked(buttonLabel));
        calculatorBody.appendChild(button);
    });
}

function calculatorButtonClicked(label) {
    const calculatorInput = document.querySelector('#calculatorInput');
    // Handle calculator button click event
    if (label === 'AC') {
        calculatorInput.value = '';
    } else {
        calculatorInput.value += label;
    }
    // Extend this function to handle other button types like operators and '='
}