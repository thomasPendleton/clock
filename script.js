// add to this military time option.

const toggleBtn = document.querySelector('.toggle')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const circleEl = document.querySelector('.circle')

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]
const months = [
  'Jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
]

//Toggle dark mode
function toggleDark() {
  //How I did it
  if (toggleBtn.innerText === 'Dark Mode') {
    toggleBtn.innerText = 'Light Mode'
  } else {
    toggleBtn.innerText = 'Dark Mode'
  }

  document.querySelector('html').classList.toggle('dark')
}
toggleBtn.addEventListener('click', toggleDark)

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const seconds = time.getSeconds()
  let minutes = time.getMinutes()
  const clockHours = hours % 12
  let ampm = hours >= 12 ? 'PM' : 'AM'

  // console.log(typeof(minutes));
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    clockHours,
    0,
    12,
    0,
    360
  )}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg )`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg )`

  secondEl.style.transition = `${seconds === 0 ? 'none' : 'all 0.3s ease'}`
  minuteEl.style.transition = `${minutes === 0 ? 'none' : 'all 0.3s ease'}`
  hourEl.style.transition = `${clockHours === 0 ? 'none' : 'all 0.3s ease'}`

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`
  timeEl.innerHTML = `${clockHours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

setInterval(setTime, 1000)
setTime()
