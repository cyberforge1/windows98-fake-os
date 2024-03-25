
export const addToDisplay = (value, displayElement) => {
    displayElement.textContent += value;
}

export const clearDisplay = (displayElement) => {
    displayElement.textContent = '';
}

export const calculate = (displayElement) => {
    let expression = displayElement.textContent;
    let result = eval(expression);
    displayElement.innerText = result;
}