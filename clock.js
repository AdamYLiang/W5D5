class Clock {
    constructor() {
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.  

        const date = new Date();
        this.hours = date.getHours(); 
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.printTime();
        setInterval(this._tick.bind(this), 10);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        let hours = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
        let minutes = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
        let seconds = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}` ;
        
        console.log(`${ hours }:${ minutes }:${ seconds }`);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        if (this.seconds === 59) {
            this.minutes++;
            this.seconds = 0;

            if (this.minutes === 59) {
                this.hours++;
                this.minutes = 0;

                if (this.hours == 23) {
                    this.hours = 0;
                }
            }
        } else {
            this.seconds++; 
        } 
        this.printTime();
    }
}

const clock = new Clock();