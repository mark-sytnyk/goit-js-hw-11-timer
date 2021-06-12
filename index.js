class CountdownTimer {
    constructor({ selector, targetDate }){
        this.selector = this.getRefs(selector);
        this.targetDate = targetDate;
        this.start();
    }
    getRefs(timerId) {
        const refs = {
            days: document.querySelector(`${timerId} [data-value="days"]`),
            hours: document.querySelector(`${timerId} [data-value="hours"]`),
            mins: document.querySelector(`${timerId} [data-value="mins"]`),
            secs: document.querySelector(`${timerId} [data-value="secs"]`),
          }
          return refs
    }
     start() {
        setInterval(() => {
            const currentDate = new Date()
            const differenceTime = this.targetDate - currentDate;
            function pad(value) {
                return String(value).padStart(2, '0')
            }
            function getTimeComponent(time) {
                const days = pad(Math.floor(differenceTime / (1000 * 60 * 60 * 24)));
                const hours = pad(Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                const mins = pad(Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60)));
                const secs = pad(Math.floor((differenceTime % (1000 * 60)) / 1000));
              
                return {days, hours, mins, secs}
              }
              const { days, hours, mins, secs } = getTimeComponent(differenceTime)
              this.selector.days.textContent = days;
              this.selector.hours.textContent = hours;
              this.selector.mins.textContent = mins;
              this.selector.secs.textContent = secs;
        }, 1000)
    }
}
const qwerty = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 3, 2021'),
  });