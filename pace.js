


const finishHoursEl = document.getElementById("finish-hours");
const finishMinutesEl = document.getElementById("finish-minutes");
const finishSecondsEl = document.getElementById("finish-seconds");

const halfFinishHoursEl = document.getElementById("halfFin-hours");
const halfFinishMinutesEl = document.getElementById("halfFin-minutes");
const halfFinishSecondsEl = document.getElementById("halfFin-seconds");

function getFinishTime()  {
    const paceMinutes = Number(document.getElementById("pace-minutes").value);
    const paceSeconds = Number(document.getElementById("pace-seconds").value);
    //input type is set as number but it was loging as string 

    //  console.log(typeof paceMinutes);
    //  console.log(paceMinutes, paceSeconds);
    var totalSeconds = (paceMinutes * 60 + paceSeconds) * 42.195;
    var halfTotalSec = totalSeconds / 2;
    // console.log(typeof totalSeconds);

    var hours = Math.floor(totalSeconds / 60 / 60);
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds % 60);

    var halfHours = Math.floor(halfTotalSec / 60 / 60);
    var halfMinutes = Math.floor(halfTotalSec / 60) % 60;
    var halfSeconds = Math.floor(halfTotalSec % 60);
    

    finishHoursEl.innerHTML = hours;
    finishMinutesEl.innerHTML = minutes;
    finishSecondsEl.innerHTML = seconds;

    halfFinishHoursEl.innerHTML = halfHours;
    halfFinishMinutesEl.innerHTML = halfMinutes;
    halfFinishSecondsEl.innerHTML = halfSeconds;


    // console.log(totalSeconds);
};
//***********************gluposti koje sam kucao */

// const paceMinutesEl = document.getElementById("pace-minutes").value;
// const paceSecondsEl = document.getElementById("pace-seconds");



// function getFinishTime() {
//     const paceSeconds = paceMinutesEl * 60 + paceSecondsEl;

//     console.log(getFinishTime());
// }


// var paceMinutes = document.getElementById("pace-minutes").value;
// var paceSeconds = document.getElementById("pace-seconds").value;



// var paceTotalSeconds = paceMinutes * 60 + paceSeconds;

// var totalTimeSeconds = Math.floor(paceTotalSeconds * 42.195);

// 

// var minutes = Math.floor(totalTimeSeconds / 60) % 60;

// var seconds = totalTimeSeconds % 60;
