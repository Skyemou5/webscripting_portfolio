const getPoke = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(pokemon => console.log(pokemon))
}

const newPokemon = 

console.log(pokemon)