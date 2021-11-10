// GLOBAL VARIABLES
const pokemonsSection = document.querySelector('#pokemons');


// FUNCTIONS

const displayPokemons = (data) => {
    return data.forEach(pokemon => {
        // create pokemon card
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon');
        pokemonsSection.appendChild(pokemonCard);

        // create pokemon image
        let image ={ image: `pokemon/${pokemon.name.english}.jpg`}
        Object.assign(pokemon, image);

        const pokemonImg = document.createElement('img');
        pokemonImg.classList.add('pokemonImg')
        pokemonImg.src = pokemon.image;
        pokemonCard.appendChild(pokemonImg);


        // create pokemon name
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = pokemon.name.english.toUpperCase();
        pokemonCard.appendChild(pokemonName);
    });
}

displayPokemons(pokemonData);