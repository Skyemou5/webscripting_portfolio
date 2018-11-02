import { senateData } from "./senators.js"
//manipulate css vars
const colorInput = document.querySelector('input[type=color]')
const colorButton = document.querySelector('button')
const colorVariable = "--yellow"

colorButton.addEventListener('click', _ => {
  document.documentElement.style.setProperty(colorVariable,'green')
})

colorInput.addEventListener('change', e => {
  console.log(e)
})


const senators = senateData.results[0].members

console.log(senators.length)

// const mostVotesEver = senators.reduce((acc, senator) => acc + senator.total_votes, 0)
// console.log(mostVotesEver)

const mostVotesEver = senators.reduce((acc, senator) => {
  return(acc.total_votes || 0) > senator.total_votes ? acc : senator
},{})
console.log("Most votes cast by any senator was " + mostVotesEver)

// nasa api key e1k1ZUbZkI2cFnAUCjaaipqc4wKlH0VNPF0wXUwn
// https://api.nasa.gov/planetary/apod?api_key=e1k1ZUbZkI2cFnAUCjaaipqc4wKlH0VNPF0wXUwn