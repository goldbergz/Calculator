const outputScreen = document.querySelector('.topside__ouput-screen')
const numberButtons = document.querySelectorAll('.bottomside__number-btn')
const actionButtons = document.querySelectorAll('.bottomside__operator-btn')
const deleteButton = document.querySelector('.topside__delete-btn')
const equals = document.getElementById('equals')

let prev = ''
let current = ''
let operation = undefined
let result = null

numberButtons.forEach(button => button.addEventListener ('click', function(e) {
    let firstOperand = e.target.textContent
    current = firstOperand
    updateDisplay()
}))


actionButtons.forEach(button => {
    button.addEventListener('click', function(e) {
    prev = Number (current)
    current = ''
    operation = e.target.textContent

    updateDisplay()
    numberButtons.forEach(button => button.addEventListener ('click', function(i) {
        let secondOperand = i.target.textContent
        current = Number (secondOperand)
    })
    )
    
})
})

equals.addEventListener('click', () => {
    result = calculate({prev, current, operation})
    updateDisplay()
    clear()
})

function updateDisplay() {
    outputScreen.classList.add('number')
    if(result === null) {
        outputScreen.textContent = current
    } else if(result !== null) {
        outputScreen.textContent = result
    }
}

function clear() {
    prev = ''
    current = ''
    operation = undefined
    result = null
}


deleteButton.addEventListener ('click', () => {
        outputScreen.innerHTML = ''
})
