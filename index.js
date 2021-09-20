import Countdown from "./countdowm.js";

const time = new Countdown("19 september 2022 20:30 GMT-0300");
console.log(time.total);

const timesNew = document.querySelectorAll('[data-time]');

function showTime() {
  timesNew.forEach((param1, param2) => {
    param1.innerHTML = time.total[param2]
 });
}

showTime();
setInterval(showTime, 1000);
