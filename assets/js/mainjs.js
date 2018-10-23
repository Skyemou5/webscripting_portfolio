//import { films } from './films'


fetch('https://swapi.co/api/films')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });



