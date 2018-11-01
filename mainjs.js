import { senateData } from "./senators.js"

const senators = senateData.results[0].members

console.log(senators.length)

// const mostVotesEver = senators.reduce((acc, senator) => acc + senator.total_votes, 0)
// console.log(mostVotesEver)

const mostVotesEver = senators.reduce((acc, senator) => {
  return(acc.total_votes || 0) > senator.total_votes ? acc : senator
},{})
console.log("Most votes cast by any senator was " + mostVotesEver)