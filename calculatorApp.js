
export const initializeCalculator = () => {
    const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const numberOfRows = Math.ceil(buttonArr.length / 4);
    const calculatorBody = document.querySelector('#calculatorBody');
    const calculatorInput = document.querySelector('#calculatorInput');

    let num1 = 0;
    let num2 = 0;
    let operator = '';

    calculatorBody.innerHTML = '';

    const calculate = (num1, num2, operator) => {
        if (operator === "+") {
            return num1 + num2;
        } else if (operator === "-") {
            return num1 - num2;
        } else if (operator === "x") {
            return num1 * num2;
        } else if (operator === "÷") {
            if (num2 === 0) {
                return "Cannot divide by zero";
            } else {
                return num1 / num2;
            }
        } else {
            return "Invalid operator";
        }
    };

    let createRowAndButtons = () => {
        let index = 0;
        for (let i = 0; i < numberOfRows; i++) {
            const newCalculatorRow = document.createElement('div');
            calculatorBody.appendChild(newCalculatorRow);
            const buttonsInRow = Math.min(buttonArr.length - index, 4);

            for (let j = 0; j < buttonsInRow; j++) {
                const newButton = document.createElement('button');
                newButton.innerText = buttonArr[index];
                newCalculatorRow.appendChild(newButton);
                newButton.addEventListener('click', () => {
                    if (newButton.innerText === 'AC') {
                        calculatorInput.value = '';
                        num1 = 0;
                        num2 = 0;
                        operator = '';
                    } else if (['+', '-', 'x', '÷'].includes(newButton.innerText)) {
                        num1 = parseFloat(calculatorInput.value);
                        operator = newButton.innerText;
                        calculatorInput.value = num1;
                    } else if (newButton.innerText === '=') {
                        num2 = parseFloat(calculatorInput.value);
                        calculatorInput.value = calculate(num1, num2, operator);
                    } else {
                        calculatorInput.value = '';
                        calculatorInput.value += newButton.innerText;
                    }
                });
                index += 1;
            }
        }
    };

    createRowAndButtons();
}

document.getElementById('calculatorCard').addEventListener('dblclick', function() {
    document.getElementById('calculatorModal').showModal();
    initializeCalculator(); 
});

document.getElementById('closeCalculatorModal').addEventListener('click', function() {
    document.getElementById('calculatorModal').close();
});