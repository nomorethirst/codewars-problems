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
  return findFree(minutes, duration)
}

function findFree(minutesArray, duration) {
  let len = minutesArray.length
  
  for (let i = 0, free = 0; i < len; i++) {
    if (minutesArray[i++] === FREE) /*global FREE*/
      free++
    else
      free = 0
    if (free === duration) 
      return timeString(i-duration)
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
  const hour = Math.floor(minuteIndex / 60) + DAY_START
  const minute = minuteIndex % 60
  return `${hour < 10 ? '0'+hour: hour}:${minute < 10 ? '0'+minute : minute}`
}

var schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];
console.log(getStartTime(schedules, 60) === '12:15');
console.log(getStartTime(schedules, 90) === null);