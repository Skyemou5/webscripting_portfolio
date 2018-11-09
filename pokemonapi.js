// const getPoke = () => {
//     return fetch('https://pokeapi.co/api/v2/pokemon')
//         .then(res => res.json())
//         .then(pokemon => console.log(pokemon))
// }

// console.log(pokemon)

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});