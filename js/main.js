//Write your pseduo code first! 
//Temmperature Converter C - F
//input that takes in a C value
//convert value to F
//put converted value into the DOM

const btn = document.querySelector('#convert')
let input = document.querySelector('#celsius')

btn.addEventListener('click', () => {
    let cTemp = input.value
    let fTemp = cTemp * 9 / 5 + 32
    document.querySelector('#farenheit').innerText = fTemp + '°F'
})

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        btn.click()
    }
})

