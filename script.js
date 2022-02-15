const toggleBtn = document.querySelector('.toggle')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday','friday', 'saturday']

const months = ['Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep','oct','nov','dec']

//Toggle dark mode
function toggleDark(){
    if(toggleBtn.innerText === 'Dark Mode'){
        toggleBtn.innerText = 'Light Mode'
        console.log('light');
    } else {
         toggleBtn.innerText = 'Dark Mode'
         console.log('dark');
    }
   
    document.querySelector('html').classList.toggle('dark')

}
toggleBtn.addEventListener('click', toggleDark)