// Calculation logic function with error handling
const calculate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "÷":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator");
    }
};

// Create calculator elements function
const createCalculatorElements = (calculatorBody, buttonArr) => {
    const numberOfRows = Math.ceil(buttonArr.length / 4);
    calculatorBody.innerHTML = '';

    let index = 0;
    for (let i = 0; i < numberOfRows; i++) {
        const newCalculatorRow = document.createElement('div');
        calculatorBody.appendChild(newCalculatorRow);
        const buttonsInRow = Math.min(buttonArr.length - index, 4);

        for (let j = 0; j < buttonsInRow; j++) {
            const newButton = document.createElement('button');
            newButton.className = 'calc-btn'; // Add class for button selection
            newButton.innerText = buttonArr[index];
            newCalculatorRow.appendChild(newButton);
            index += 1;
        }
    }
};

// Add event listeners function
const addEventListeners = (calculatorInput, calculate) => {
    let num1 = 0;
    let num2 = 0;
    let operator = '';
    let resetInput = false;

    const btns = document.getElementsByClassName('calc-btn');
    Array.from(btns).forEach((btn) => {
        btn.addEventListener('click', () => {
            const btnValue = btn.innerText;

            try {
                if (btnValue === 'AC') {
                    calculatorInput.value = '';
                    num1 = 0;
                    num2 = 0;
                    operator = '';
                } else if (['+', '-', 'x', '÷'].includes(btnValue)) {
                    num1 = parseFloat(calculatorInput.value);
                    if (isNaN(num1)) {
                        throw new Error("Invalid input for number 1");
                    }
                    operator = btnValue;
                    resetInput = true;
                } else if (btnValue === '=') {
                    num2 = parseFloat(calculatorInput.value);
                    if (isNaN(num2)) {
                        throw new Error("Invalid input for number 2");
                    }
                    calculatorInput.value = calculate(num1, num2, operator);
                    resetInput = true;
                } else {
                    if (resetInput) {
                        calculatorInput.value = btnValue;
                        resetInput = false;
                    } else {
                        calculatorInput.value += btnValue;
                    }
                }
            } catch (error) {
                alert(error.message);
                calculatorInput.value = '';
                num1 = 0;
                num2 = 0;
                operator = '';
                resetInput = false;
            }
        });
    });
};

// Initialize calculator function
export const initializeCalculator = () => {
    const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const calculatorBody = document.querySelector('#calculatorBody');
    const calculatorInput = document.querySelector('#calculatorInput');

    createCalculatorElements(calculatorBody, buttonArr);
    addEventListeners(calculatorInput, calculate);
};

// Event listeners for opening and closing the calculator modal
document.getElementById('calculatorCard').addEventListener('dblclick', () => {
    document.getElementById('calculatorModal').showModal();
    initializeCalculator(); 
});

document.getElementById('closeCalculatorModal').addEventListener('click', () => {
    document.getElementById('calculatorModal').close();
});
