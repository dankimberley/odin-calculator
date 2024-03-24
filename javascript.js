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
        output.textContent = 0
    }
}

// set output to button pressed
function numberButtonPressed(input) {
    if (Number(output.textContent) > 9999999) {
        return
    }
    if (output.textContent == 0) {
        output.textContent = (input.textContent)
        console.log('helloi')
    } else {
        output.textContent += (input.textContent)
    }
}
