import { format } from 'date-fns'

window.addEventListener('load', () => {
    const formattedDate = format(new Date(), 'MMM dd, yyyy')
    const heading = document.querySelector('h1')
    heading.innerText = `We updated the title ${formattedDate}`
})
