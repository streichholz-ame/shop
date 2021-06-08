class Counter {
    constructor(id){
        this.counter1 = document.getElementById(id);
        this.main();
        setInterval(this.main.bind(this), 1000);
        }
    main(){
        var targetDate = new Date("Dec 5, 2021 15:37:25");
        this.getTime(targetDate, this.getDayAmount, ".timer-days .timerQty");
        this.getTime(targetDate, this.getHourAmount, ".timer-hours .timerQty");
        this.getTime(targetDate, this.getMinuteAmount, ".timer-minutes .timerQty");
        this.getTime(targetDate, this.getSecondAmount, ".timer-seconds .timerQty");
    }
    getTime(targetDate, method, cssClass){
        let timeDifference  = this.getTimeDifference(targetDate);
        let time            = method(timeDifference),
            place           = document.querySelector(cssClass); 
        place.innerText     = time < 10 ? `0${time}` : time;
    }

    getTimeDifference(targetDate) {
        let today   = new Date();
        return targetDate.getTime() - today.getTime();
    }

    getDayAmount(timeDifference) {
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    }

    getHourAmount(timeDifference) {
        return Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    getMinuteAmount(timeDifference) {
        return Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    }

    getSecondAmount(timeDifference) {
        return Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
}
let counter1    = new Counter("counter1");