// GLOBAL VARIABLES
const pokemonsSection = document.querySelector('#pokemons');
const searchBtn = document.querySelector('.fa-search');
const searchInput = document.querySelector('#searchInput');
const header = document.querySelector('#header');

// FUNCTIONS

const displayPokemons = (data) => {
  pokemonsSection.innerHTML = '';

  return data.forEach((pokemon) => {
    // create pokemon card
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon');
    pokemonsSection.appendChild(pokemonCard);

    // create pokemon image
    let image = { image: `pokemon/${pokemon.name.english}.jpg` };
    Object.assign(pokemon, image);

    const pokemonImg = document.createElement('img');
    pokemonImg.classList.add('pokemonImg');
    pokemonImg.src = pokemon.image;
    pokemonCard.appendChild(pokemonImg);

    // create pokemon name
    const pokemonName = document.createElement('h3');
    pokemonName.textContent = pokemon.name.english.toUpperCase();
    pokemonCard.appendChild(pokemonName);
  });
};

displayPokemons(pokemonData);

// search function
const searchPokemon = (value) => {
  const filtered = pokemonData.filter((pk) => pk.name.english.includes(value));
  console.log(filtered);
  return displayPokemons(filtered);
};

const displaySelectedPokemon = (item) => {
  header.innerHTML = '';

  let itemName = item.children[1].textContent;
  let finded = pokemonData.find((pk) => pk.name.english.toUpperCase() === itemName);

  // selected pokemon image
  let pImg = document.createElement('img');
  pImg.classList.add('selected-img');
  pImg.src = finded.image;
  header.appendChild(pImg);

  // selected pokemon name and info
  let infoSection = document.createElement('div');
  header.appendChild(infoSection);

  let pName = document.createElement('h2');
  pName.textContent = finded.name.english;
  infoSection.appendChild(pName);

  // type
  let pType = document.createElement('div');
  pType.classList.add('pType');
  pType.textContent = finded.type.join(' , ');
  infoSection.appendChild(pType);

  console.log(finded);
  return window.scrollTo({ top: 0, behavior: 'smooth' });
};

// AddEventListeners

/* searchBtn.addEventListener('click', () => searchPokemon(searchInput.value)); */
/* searchInput.addEventListener('change', () => searchPokemon(searchInput.value)); */
searchInput.addEventListener('input', () => searchPokemon(searchInput.value));

pokemonsSection.addEventListener('mouseover', () => {
  let items = Array.from(pokemonsSection.children);
  return items.forEach((item) =>
    item.addEventListener('click', () => displaySelectedPokemon(item))
  );
});
