function favColor(event) {
    event.preventDefault()
    alert('My favorite color is red')
}
function favPlace(event) {
    event.preventDefault()
    alert('My favorite place is Joes Valley Utah')
}
function favRitual(event) {
    event.preventDefault()
    alert('My favorite ritual is going to the gym every night')
}

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)