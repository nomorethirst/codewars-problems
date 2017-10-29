const DAY_START = 9*60
const DAY_END = 19*60
const BUSY = true
const FREE = false

function getStartTime(schedules, duration) {
  const minutes = Array(DAY_END - DAY_START).fill(FREE)
  for (let schedule of schedules) {
    for (let block of schedule) {
      markBusy(minutes, block)
    }
  }
  //printMinutesArray(minutes)
  return findFree(minutes, duration)
}

function findFree(minutesArray, duration) {
  let len = minutesArray.length
  
  for (let i = 0, free = 0; i < len; i++) {
    if (minutesArray[i] === FREE) /*global FREE*/
      free++
    else
      free = 0
    if (free === duration) 
      return timeString(i-duration+1)
  }
  return null
}

function markBusy(minutesArray, scheduleBlock) {
  const start = minuteIndex(scheduleBlock[0])
  const end   = minuteIndex(scheduleBlock[1])
  for (let i = start; i < end; i++) {
    minutesArray[i] = BUSY
  }
}

function minuteIndex(timestring) {
  const parsed =  timestring
                    .split(':')
                    .map( x => parseInt(x) )
  return parsed[0]*60 + parsed[1] - DAY_START
}

function timeString(minuteIndex) {
  const hour = Math.floor(minuteIndex / 60) + DAY_START/60
  const minute = minuteIndex % 60
  return `${hour < 10 ? '0'+hour: hour}:${minute < 10 ? '0'+minute : minute}`
}

function printMinutesArray(minutesArray) {
  for (let i = 0, len = minutesArray.length; i < len; i+=60) {
    console.log(`${timeString(i)}: ${minutesArray.slice(i,i+60).map(x=>x===BUSY?'X':'_').join('')}`)
  }
}

console.log(`timeString(0) returns: ${timeString(0)}`)
console.log(`minuteIndex('09:15') returns: ${minuteIndex('09:15')}`)

var schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];
console.log(getStartTime(schedules, 60) === '12:15');
console.log(getStartTime(schedules, 90) === null);