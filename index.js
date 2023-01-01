// toggle button elements
const toggleParent = document.getElementById('toggle');
const toggleBtns = toggleParent.getElementsByClassName('btn');
const bodyElement = document.getElementById('body-element');

// screen element
const screenElement = document.getElementById('screen');

//operator keypad elements
const plusOperator = document.getElementById('plus');
const minusOperator = document.getElementById('minus');
const multiplyOperator = document.getElementById('multiply');
const divideOperator = document.getElementById('divide');
const operatorElements = [plusOperator, minusOperator, multiplyOperator, divideOperator];

// number keypad elements
const numberElements = document.getElementsByClassName('numbers');

// equal button element
const equalBtn = document.getElementById('equal')

// delete button element
const deleteBtn = document.getElementById('delete');

// reset button element
const resetBtn = document.getElementById('reset');

//calculation variables
let result = 0;
let firstValue = 0;
let secondValue = 0;
let tempValue = 0;
let calcOnce = 1;
let operator = '';


//change theme function
function changeTheme(index){
    // changing toggle class to the selected button
    for(let j=0; j<toggleBtns.length; j++){
        if(toggleBtns[j].classList.contains('toggle')) {
            toggleBtns[j].classList.remove('toggle');
        }
    }
    toggleBtns[index].classList.add('toggle');

    // adding selected theme class to body tag
    switch(index){
        case 0:
            if(bodyElement.classList.contains('second-theme')) bodyElement.classList.remove('second-theme');
            else if(bodyElement.classList.contains('third-theme')) bodyElement.classList.remove('third-theme');
            break;
        case 1:
            if(bodyElement.classList.contains('third-theme')) bodyElement.classList.remove('third-theme');
            bodyElement.classList.add('second-theme');
            break;
        case 2:
            if(bodyElement.classList.contains('second-theme')) bodyElement.classList.remove('second-theme');
            bodyElement.classList.add('third-theme');
            break;
    }
}
// event listener click on toggle buttons
for(let i=0; i<toggleBtns.length; i++){
    toggleBtns[i].addEventListener('click', ()=>{
        changeTheme(i);
    })
}


// Calculation functions :

// update screen function
function updateScreen(value){
    switch(value){
        case 'reset':
            screenElement.innerText = '0';
            if(screenElement.classList.contains('active')) screenElement.classList.remove('active');
            break;
        case 'del':
            screenElement.innerText = screenElement.innerText.slice(0, screenElement.innerText.length-1);
            if (screenElement.innerText == '') {
                screenElement.innerText = '0';
                if(screenElement.classList.contains('active')) screenElement.classList.remove('active');
            }
            break;
        case 'equal':
            screenElement.innerText = `${result}`;
            break;
        default:
            if(screenElement.classList.contains('active')) screenElement.innerText += value;
		    else {
			screenElement.innerText = value;
			screenElement.classList.add('active')
		    }
    }
}

// calculate function
function calculate(firstValue, secondValue, operator){
    switch(operator){
        case '+': 
            return firstValue + secondValue;
            break;
        case '-':
            return firstValue - secondValue;
            break;
        case 'x':
           return firstValue * secondValue;
           break;
        case '/':
            if(firstValue==0 && secondValue==0) return 'NaN';
            else if(secondValue==0) return 'Infinity';
            else return firstValue / secondValue;
            break;
        default:
            return 0;
    }
}


// add event listener for numbers
for(let i = 0; i<numberElements.length; i++){
    numberElements[i].addEventListener('click', ()=>{
        if(screenElement.innerText == 'Infinity' || screenElement.innerText == 'NaN') screenElement.innerText = '';
        updateScreen(numberElements[i].innerText);
    })
}

// add event listener for operators
for(let i = 0; i<operatorElements.length; i++){
    operatorElements[i].addEventListener('click', ()=>{
        firstValue = Number(screenElement.innerText);
        operator = operatorElements[i].innerText;
        updateScreen('reset');
        calcOnce = 1;
    })   
}

// add event listener for equal button
equalBtn.addEventListener('click', ()=>{
    secondValue = Number(screenElement.innerText);
    if(firstValue == 'Infinity' || result == 'NaN') {updateScreen('equal');}
    // repeating calculation with the same second argument (tempValue), Ex; 2x2 = 4 = 8 = 16 = ....
    else if(calcOnce>0){
        tempValue = secondValue;
	    result = calculate(firstValue, secondValue, operator);
        updateScreen('equal');
	    calcOnce--
    }
    else{
        result = calculate(secondValue, tempValue, operator);
        updateScreen('equal');
    }
})

// // add event listener for delete btn
deleteBtn.addEventListener('click', ()=>{
    updateScreen('del');
})

// // add event listener for reset btn
resetBtn.addEventListener('click', ()=>{
    updateScreen('reset');
    result = 0;
    firstValue = 0;
    secondValue = 0;
    tempValue = 0;
    operator = '';
    calcOnce = 1;
})