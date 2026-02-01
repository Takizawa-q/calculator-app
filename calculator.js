const buttons = document.querySelectorAll('.calculator__button');
const placeholder = document.querySelector('.calculator__display');
const expression = document.querySelector('.calculator__expression');

let firstNum = 0;
let operator = null;
let expressionString = '';

function handleButtonClick(buttonText) {
    let placeholderText = placeholder.getAttribute('placeholder');
    if (placeholderText.includes(',')) { 
        placeholderText = placeholderText.replace(',', '.');
    }
    
    // Find and trigger animation on the button
    let buttonElement = Array.from(buttons).find(btn => btn.textContent === buttonText);
    if (buttonElement) {
        buttonElement.classList.add('calculator__button--active');
        setTimeout(() => {
            buttonElement.classList.remove('calculator__button--active');
        }, 100);
    }
    
    switch (buttonText) {

        case 'C':
        case 'AC': {
            placeholder.placeholder = 0;
            firstNum = 0;
            operator = null;
            expressionString = '';
            expression.textContent = '';
            break;
        };
        case '+':
        case '-':
        case '*':
        case '/': {
            firstNum = parseFloat(placeholderText);
            operator = buttonText;
            expressionString = firstNum + ' ' + operator + ' ';
            expression.textContent = expressionString;
            placeholder.placeholder = 0;
            break;
        };
        case '%': {
            if (operator && firstNum !== 0) {
                let secondNum = parseFloat(placeholderText);
                let percentValue = (firstNum * secondNum) / 100;
                placeholder.placeholder = Math.round(percentValue * 100) / 100;
                expressionString += secondNum + '%';
                expression.textContent = expressionString;
            } else {
                placeholder.placeholder = Math.round(placeholderText / 100 * 100) / 100;
            }
            break;
        };
        case '=': {
            if (operator && firstNum !== 0) {
                let secondNum = parseFloat(placeholderText);
                let result;
                switch(operator) {
                    case '+': result = firstNum + secondNum; break;
                    case '-': result = firstNum - secondNum; break;
                    case '*': result = firstNum * secondNum; break;
                    case '/': result = firstNum / secondNum; break;
                }
                placeholder.placeholder = Math.round(result * 100) / 100;
                expressionString += secondNum;
                expression.textContent = expressionString;
                operator = null;
                firstNum = 0;
                expressionString = '';
            }
            break;
        };
        default: {
            if (placeholderText === '0' && buttonText !== '+/-' && buttonText !== ',') {
                placeholder.placeholder = buttonText;
            } else {
                placeholder.placeholder = placeholderText + buttonText;
            }
        }
    }
    console.log(buttonText);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if (key >= '0' && key <= '9') {
        handleButtonClick(key);
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleButtonClick(key);
    }
    else if (key === '%') {
        handleButtonClick('%');
    }
    else if (key === 'Enter' || key === '=') {
        handleButtonClick('=');
    }
    else if (key === '.' || key === ',') {
        handleButtonClick(',');
    }
    else if (key === 'Backspace' || key === 'Delete') {
        handleButtonClick('C');
    }
    else if (['c', 'с'].includes(key.toLowerCase())) {
        handleButtonClick('C');
    }
});
