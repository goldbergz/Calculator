const outputScreen = document.querySelector('.topside__ouput-screen')
const numberButtons = document.querySelectorAll('.bottomside__number-btn')
const actionButtons = document.querySelectorAll('.bottomside__operator-btn')
const deleteButton = document.querySelector('.topside__delete-btn')
const equals = document.getElementById('equals')

let number1
let number2

 function clickValue (e) {
        number1 = e.target.textContent
        outputScreen.textContent += number1
        outputScreen.classList.add('number')
        console.log(number1)
    }


actionButtons.forEach(button => {
    button.addEventListener ('click', function (e) {
        outputScreen.innerHTML = ''

        let action = e.target.textContent
        //  switch (action) {
        //     case '*':
        //         outputScreen.textContent += number * number
        //         break
        //     case '/':
        //         console.log ('/')
        //         break
        //     case '-':
        //         console.log ('-')
        //         break
        //     case '+':
        //         console.log ('+')
        //         break
        //  }

    })
})

function ClickValue2 (e2) {
    number2 = e2.targer.textContent
    console.log(number2)
}

function toCount () {
    let result = number1 * number2
    console.log (result)
}


deleteButton.addEventListener ('click', () => {
        outputScreen.innerHTML = ''
})

numberButtons.forEach(button => button.addEventListener ('click', clickValue))
equals.addEventListener ('clck', toCount)