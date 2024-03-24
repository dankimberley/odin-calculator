let numberOne = 0
let numberTwo = 0
let operatorSelected = false
let operator = ''

// add event listener to all buttons on page, call buttonPressed when clicked
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        buttonPressed(button)
    })
    console.log(button)
})

// setup output variable 
output = document.getElementById('text-box')

// deal with button press, determine number or operator
function buttonPressed(input) {
    if (input.classList.contains('num')){
        numberButtonPressed(input)
    } else if (input.textContent == 'AC') {
        acButtonPressed()
    } else if (input.classList.contains('op')) {
        processOperator(input)
    }
}

// set output to button pressed
function numberButtonPressed(input) {
    if (Number(output.textContent) > 9999999) {
        return
    }
    if (output.textContent == 0) {
        output.textContent = (input.textContent)
    } else {
        output.textContent += (input.textContent)
    }
}

function acButtonPressed() {
    output.textContent = 0
    numberOne = 0
    numberTwo = 0
    operatorSelected = false
    operator = ''
}

function processOperator(input) {
    console.log(`Processing input ${input}`)
    if (input.textContent == '=') {
        numberTwo = output.textContent
        calculate()
    } else {
        numberOne = output.textContent
        operatorSelected = true
        operator = input.textContent
        output.textContent = 0
    }
}

function calculate() {
    let result = 0
    numberOne = Number(numberOne)
    numberTwo = Number(numberTwo)
    console.log(numberOne)
    console.log(numberTwo)
    console.log(operator)
    switch (operator) {
        case "+": 
            result = numberOne + numberTwo
            break
        case "-": 
            result = numberOne - numberTwo
            break
        case "×": 
            result = numberOne * numberTwo
            break
        case "÷": result = numberOne / numberTwo
    }
    output.textContent = result
}