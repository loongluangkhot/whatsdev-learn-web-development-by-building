// querySelectors
let hourSelector = document.querySelector('#hour')
let minuteSelector = document.querySelector('#minute')
let secondSelector = document.querySelector('#second')

// function clock() to update time
function clock() {

    // get time
    const fullDate = new Date()
    const hour = fullDate.getHours()
    const minute = fullDate.getMinutes()
    const second = fullDate.getSeconds()

    // function takes in number as argument, and convert number to length-2 string
    function twoChar(number) {
        let twoCharStr = ''
        if (number < 10) {
            twoCharStr = `0${number}`
        } else {
            twoCharStr = `${number}`
        }
        return twoCharStr
    }

    // update time
    hourSelector.innerHTML = `${twoChar(hour)} :`
    minuteSelector.innerHTML = `${twoChar(minute)} :`
    secondSelector.innerHTML = `${twoChar(second)}`
}

// call clock() to update time every second
setInterval(clock,100)