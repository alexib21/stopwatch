const stopwatchtimer = document.querySelector(".stopwatch-timer")
const stopwatchStartBtn = document.querySelector('.stopwatch-btn-Start')
const stopwatchStopBtn = document.querySelector('.stopwatch-btn-Stop')
const stopwatchResetBtn = document.querySelector('.stopwatch-btn-Reset')

let stopwatchMilli = 0
let stopwatchSeconds = 0
let stopwatchMintues = 0
let interval;

function runStopWatch() {
    stopwatchMilli += 100

    if(stopwatchMilli > 999) {
        stopwatchSeconds++
        stopwatchMilli = 0
    }

    if(stopwatchSeconds > 59) {
        stopwatchMintues++
        stopwatchSeconds = 0
    }
     console.log(stopwatchMintues, stopwatchSeconds, stopwatchMilli)
     stopwatchtimer.innerHTML = stopwatchMintues + ":" + stopwatchSeconds + ":" + stopwatchMilli
   
    }

    const startStopWatch = () => {
        clearInterval(interval)
        interval = setInterval(runStopWatch, 100)
    }
    stopwatchStartBtn.addEventListener("click" , startStopWatch)

    const stopStopWatch = () => {
        clearInterval(interval)
    }
    stopwatchStopBtn.addEventListener("click" , stopStopWatch)

    const resetStopWatch = () => {
        stopwatchtimer.innerHTML = '00:00:00'
    }
    stopwatchResetBtn.addEventListener("click", resetStopWatch)
    