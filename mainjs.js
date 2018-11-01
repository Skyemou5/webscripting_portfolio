//import { films } from './films'

//vars

// let luke = document.querySelector('#luke')
// let crawl = document.querySelector('#crawl')
// let movieList = document.querySelector('#movieList')
// let characters = document.querySelector('#characters')
// //starter crawl
// fetch('https://swapi.co/api/films/1')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//     //console.log(myJson.);
//     luke.textContent = myJson.title
//     crawl.textContent = myJson.opening_crawl
//   });

// //list of movies
// fetch('https://swapi.co/api/films/')
//   .then(function(response){
//     return response.json();
//   })
//   //print list of stuff within api object characters
//   .then(function(myJson) {
//     myJson.results.forEach( (film) => {
//       film.characters.forEach( (character) => {
//         console.log(character)
//       })
//     })
//   })

//real list for movies
// fetch('https://swapi.co/api/films/')
//   .then(function(response){
//     return response.json()
//   })
// //print list of stuff within api object
// .then(function(myJson) {
//   myJson.results.forEach( (film) => {    
//     let listItem = document.createElement('li')
//     listItem.textContent = film.title
//     movieList.appendChild(listItem)

//     console.log(film.title)
//   })  
// })

// fetch('https://swapi.co/api/people/')
//   .then(function(response){
//     return response.json()
//     //console.log(Json)
//   })
// //print list of stuff within api object
// .then(function(myJson) {
//   myJson.results.forEach( (people) => {    
//     let listItem = document.createElement('li')
//     listItem.textContent = people.name
//     movieList.appendChild(listItem)
//     console.log(people.name)
//   })
// })