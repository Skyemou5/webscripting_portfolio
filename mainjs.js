import { films } from './films'

let film = films();
// stuff below this makes stuff happen

let cardList = document.querySelector("#filmList");

films.forEach((films) => {
    console.log(film.title)
    let filmList = document.createElement("li");
    
})

