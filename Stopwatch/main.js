const result = document.getElementById('result')
const start = document.getElementById('start-btn')
const stopbtn = document.getElementById('stop-btn')
const reset = document.getElementById('reset-btn')
let counter = 0

class Stopwatch {
    constructor(result) {
        this.result = result
    }

    start() {
        reset.style.display = "block"
        start.style.display = "none"
        stopbtn.style.display = "block"

        if (counter === 0) {
            console.log("counter")
            this.seconds = 1
            this.minutes = 0
            this.hours = 0
        }

        const clear = setInterval(() => {
            counter += 1
            if (this.hours === 0) {
                if (this.seconds < 10) result.innerHTML = `${this.minutes}:0${this.seconds}`
                else result.innerHTML = `${this.minutes}:${this.seconds}`
                
                this.seconds += 1;
                if (this.seconds === 60) {
                    this.seconds = 0
                    this.minutes += 1;
                }

                if (this.minutes === 60) {
                    this.hours += 1;
                }
            } else {
                result.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`
                this.seconds += 1;
                if (this.seconds === 60) {
                    this.seconds = 0
                    this.minutes += 1;
                }

                if (this.minutes === 60) {
                    this.minutes = 0
                    this.hours += 1;
                }
            }
        }, 1000)
        this.clear = clear
    }
    
    stop() {
        clearInterval(this.clear)
        start.style.display = "block"
        stopbtn.style.display = "none"
    }
    
    reset() {
        this.seconds = 1
        this.minutes = 0
        this.hours = 0
        result.innerHTML = '0:00'
    }
}

const stopwatch = new Stopwatch(result)

start.addEventListener('click', () => {
    stopwatch.start()    
})

stopbtn.addEventListener('click', () => {
    stopwatch.stop()
})

reset.addEventListener('click', () => {
    stopwatch.reset()
})