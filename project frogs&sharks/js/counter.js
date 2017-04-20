/**
 * Created by radek on 20.04.17.
 */

function getTimeRemaining(startDate) {
    var t = Date.parse(premiera) - Date.parse(new Date());
    var seconds =   Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / 1000 * 60 * 60) % 24);
    var days = Math.floor((t / 1000 * 60 * 60 * 24));
    return {
        'total': t,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days
    }
}
function timeToStart(id, startDate) {
    var myClock = document.getElementById(id);
    var myDays = clock.querySelector('#days');
    var myHours = clock.querySelector('#hours');
    var myMinutes = clock.querySelector('#minutes');
    var mySeconds = clock.querySelector('#seconds');

    function updateClock() {
        var t = getTimeRemaining(startDate);

        myDays.innerHTML = t.days;
        myHours.innerHTML = ('0' + t.hours).slice(-2);
        myMinutes.innerHTML = ('0' + t.minutes).slice(-2);
        mySeconds.innerHTML = ('0' + t.seconds).slice(-2);
    }
}
    updateClock();
    var timeinterval= setInterval(updateClock, 1000)
}
var deadline = new Date("2017-06-05T14:57:06.000Z");
timeToStart('#counter', deadline);