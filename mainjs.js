//import { films } from './films'
let luke = document.querySelector('#luke')


fetch('https://swapi.co/api/films')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    luke.textContent = myJson.title
  });


  
