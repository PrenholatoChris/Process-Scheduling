export function start() {
  cron = setInterval(() => { timer(); }, 1000);
}

let minute = 0;
let second = 0;
let millisecond = 0;
let cron;



function timer() {
  if((millisecond += 1000) == 1000){
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
  }
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

export function pause() {
  minute = 0;
  second = -1;
  millisecond = 0;
  timer()
  clearInterval(cron);
}


export function updateCount(count){
  document.getElementById("count").textContent = count
  updateProcessPerSecond(count)
}

function updateProcessPerSecond(count){
  document.getElementById("processPerSecond").textContent = (count/((minute*60)+second)).toFixed(3)
}
