import { format } from 'date-fns'

// We imported data-fns, because we want to be sure bundling from NPM works correctly
// Feel free to remove it
window.addEventListener('load', () => {
    const formattedDate = format(new Date(), 'MMM dd, yyyy')
    const heading = document.querySelector('h1')
    heading.innerText = `We updated the title ${formattedDate}`
})
