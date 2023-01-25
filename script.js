const currentDisplay = document.getElementById('current');
const previousDisplay = document.getElementById('previous');
let currentNumber = '';
let previousNumber = '';
let total = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(currentNumber == 'ERROR') {
            currentNumber = '';
            previousNumber = '';
            previousDisplay.textContent = previousNumber;
        }
        //Number button is clicked
        if(button.classList[1] == 'numButton') {
        currentNumber += button.id;
        }
        //Decimal button is clicked
        else if(button.id == 'decimal') {
            if (currentNumber == '' || currentNumber.includes('.')) {
            }
            else {
                currentNumber = currentNumber + '.'; 
            }
        }
        //Clear is clicked
        else if(button.id == 'clear') {
            currentNumber = '';
            previousNumber = '';
            previousDisplay.textContent = previousNumber;
        }
        //Delete is clicked
        else if(button.id == 'delete') {
            currentNumber = currentNumber.slice(0, -1); 
        }
        //Plus is clicked
        else if(button.id == 'plus') {
            if(checkOperator() && currentNumber == ''){
                previousNumber = previousNumber.slice(0, -1) + '+'
            }
            else if(checkOperator() && currentNumber !== '') {
                calculate();
                    if(currentNumber == 'ERROR') {   
                    }
                    else {
                        previousNumber = currentNumber + '+';
                        currentNumber = '';
                    }
            }
            else if(previousDisplay.textContent.slice(-1) == '=') {
                previousNumber = currentNumber + '+';
                currentNumber = ''                
            }
            else if(previousNumber == '' && currentNumber == ''){       
            }
            else {
                previousNumber = currentNumber + '+';
                currentNumber = '';
            }
            previousDisplay.textContent = previousNumber;
        }
        //Minus is clicked
        else if(button.id == 'minus') {
            if(checkOperator() && currentNumber == ''){
                previousNumber = previousNumber.slice(0, -1) + '-'
            }
            else if(checkOperator() && currentNumber !== '') {
                calculate();
                if(currentNumber == 'ERROR') {   
                }
                else {
                    previousNumber = currentNumber + '-';
                    currentNumber = '';
                }
            }
            else if(previousDisplay.textContent.slice(-1) == '=') {
                previousNumber = currentNumber + '-';
                currentNumber = ''                
            }
            else if(previousNumber == '' && currentNumber == ''){       
            }
            else {
                previousNumber = currentNumber + '-';
                currentNumber = '';
            }
            previousDisplay.textContent = previousNumber;
        }
        //Times is clicked
        else if(button.id == 'times') {
            if(checkOperator() && currentNumber == ''){
                previousNumber = previousNumber.slice(0, -1) + '*'
            }
            else if(checkOperator() && currentNumber !== '') {
                calculate();
                if(currentNumber == 'ERROR') {   
                }
                else {
                    previousNumber = currentNumber + '*';
                    currentNumber = '';
                }
            }
            else if(previousDisplay.textContent.slice(-1) == '=') {
                previousNumber = currentNumber + '*';
                currentNumber = ''                
            }
            else if(previousNumber == '' && currentNumber == ''){       
            }
            else {
                previousNumber = currentNumber + '*';
                currentNumber = '';
            }
            previousDisplay.textContent = previousNumber;
        }
        //Divide is clicked
        else if(button.id == 'divide') {
            if(checkOperator() && currentNumber == ''){
                previousNumber = previousNumber.slice(0, -1) + '/'
            }
            else if(checkOperator() && currentNumber !== '') {
                calculate();
                if(currentNumber == 'ERROR') {   
                }
                else {
                    previousNumber = currentNumber + '/';
                    currentNumber = '';
                }
            }
            else if(previousDisplay.textContent.slice(-1) == '=') {
                previousNumber = currentNumber + '/';
                currentNumber = ''                
            }
            else if(previousNumber == '' && currentNumber == ''){       
            }
            else {
                previousNumber = currentNumber + '/';
                currentNumber = '';
            }
            previousDisplay.textContent = previousNumber;
        }
        //Equals is clicked
        else if(button.id == 'equals') {
            if (previousNumber !== '' && currentNumber !== '' && previousNumber.slice(-1) !== '='){
                calculate();
            }
        }
        currentDisplay.textContent = currentNumber;
        
    });
    
});

function sum(a, b) {
    currentNumber = Number(a) + Number(b);
    previousNumber = `${a}+${b}=`
};

function subtract(a, b) {
    currentNumber = Number(a) - Number(b);
    previousNumber = `${a}-${b}=`
};

function divide(a, b) {
    if(b == 0){
        currentNumber = 'ERROR';
        previousNumber = `${a}+${b}=`
    }
    else {
        currentNumber = Number(a) / Number(b);
        previousNumber = `${a}/${b}=`
    }
};

function multiply(a, b) {
    currentNumber = a * b;
    previousNumber = `${a}*${b}=`
};

function calculate() {
    previousDisplay.textContent = `${previousNumber}${currentNumber}=`;
    if(previousNumber.slice(-1) == '+') {
        sum(previousNumber.slice(0, -1), currentNumber);
    }
    else if(previousNumber.slice(-1) == '-') {
        subtract(previousNumber.slice(0, -1), currentNumber);
    }
    else if(previousNumber.slice(-1) == '/') {
        divide(previousNumber.slice(0, -1), currentNumber);
    }
    else if(previousNumber.slice(-1) == '*') {
        multiply(previousNumber.slice(0, -1), currentNumber);
    }
}

function checkOperator() {
    if (previousNumber.slice(-1) == '+') {
        return true;
    }
    else if (previousNumber.slice(-1) == '-') {
        return true;
    }
    else if (previousNumber.slice(-1) == '/') {
        return true;
    }
    else if (previousNumber.slice(-1) == '*') {
        return true;
    }
    else {
        return false;
    }
}