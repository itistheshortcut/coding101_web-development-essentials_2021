'use strict';

// GLOBAL VARIABLES
const pokemonSection = document.querySelector('#pokemons');
const serachInput = document.querySelector('#serachInput');
const searchButton = document.querySelector('.fa-search');
const header = document.querySelector('#header');
const result = document.querySelector('#result');

const pokemonList = (data) => {
  pokemonSection.innerHTML = '';
  result.textContent = `result(${data.length})`;

  if (data.length < 1) {
    return (pokemonSection.innerText = 'not matched ');
  }

  return data.forEach((pokemon) => {
    // create pokemon card
    const card = document.createElement('div');
    card.classList.add('pokemon');
    pokemonSection.appendChild(card);

    // assign image for each pokemon data.
    let image = { image: `pokemon/${pokemon.name.english.toLowerCase().replace(' ', '-')}.jpg` };
    Object.assign(pokemon, image);

    // create pokemon img tag.
    const pokemonImg = document.createElement('img');
    pokemonImg.classList.add('pokemon-img');
    pokemonImg.src = pokemon.image;
    card.appendChild(pokemonImg);

    // create pokemon Name.
    const pokemonName = document.createElement('h3');
    pokemonName.classList.add('pokemon-name');
    pokemonName.textContent = pokemon.name.english.toUpperCase();
    card.appendChild(pokemonName);
  });
};

pokemonList(pokemonData);

// Search pokemons by Name

const searchPokemon = (e) => {
  console.log(e);
  let value = searchInput.value.toLowerCase();
  let filtered = pokemonData.filter((pokemon) =>
    pokemon.name.english.toLowerCase().includes(value)
  );
  return pokemonList(filtered);
};

/* searchButton.addEventListener('click', searchPokemon); */
/* searchInput.addEventListener('change', searchPokemon); */
searchInput.addEventListener('input', searchPokemon);

// A function to get selected pokemon data.
const pokemonCard = document.querySelectorAll('.pokemon');

const getSelectedPokemon = (pokemon) => {
  header.innerHTML = '';
  let pokemonName = pokemon.children[1].textContent;
  let pTarget = pokemonData.find((p) => p.name.english.toUpperCase() === pokemonName);

  // create image in the header
  const pImg = document.createElement('img');
  header.appendChild(pImg);
  pImg.setAttribute('class', 'selected-pokemon-img');
  pImg.src = pTarget.image;

  // create info div
  const infoDiv = document.createElement('div');
  header.appendChild(infoDiv);
  infoDiv.classList.add('info-div');

  const infoTitle = document.createElement('h2');
  infoDiv.appendChild(infoTitle);
  infoTitle.innerText = pTarget.name.english;

  const pType = document.createElement('div');
  infoDiv.appendChild(pType);
  pType.classList.add('pType');
  pType.innerText = pTarget.type.join(' , ');

  // info Table
  const infoTable = document.createElement('table');
  infoDiv.appendChild(infoTable);
  infoTable.classList.add('table-info');

  const trA = document.createElement('tr');
  const trD = document.createElement('tr');
  const trS = document.createElement('tr');

  const thA = document.createElement('th');
  const thD = document.createElement('th');
  const thS = document.createElement('th');

  const tdA = document.createElement('td');
  const tdD = document.createElement('td');
  const tdS = document.createElement('td');

  thA.appendChild(document.createTextNode('Attack'));
  thD.appendChild(document.createTextNode('Defense'));
  thS.appendChild(document.createTextNode('Speed'));

  tdA.appendChild(document.createTextNode(`${pTarget.base.Attack}`));
  tdD.appendChild(document.createTextNode(`${pTarget.base.Defense}`));
  tdS.appendChild(document.createTextNode(`${pTarget.base.Speed}`));

  trA.appendChild(thA);
  trA.appendChild(tdA);

  trD.appendChild(thD);
  trD.appendChild(tdD);

  trS.appendChild(thS);
  trS.appendChild(tdS);

  infoTable.appendChild(trA);
  infoTable.appendChild(trD);
  infoTable.appendChild(trS);

  /*  infoTable.innerHTML = `<tbody>
    <tr>
      <th>Attack</th>
      <td>${pTarget.base['Attack']}</td>
    </tr>
    <tr>
      <th>Defense</th>
      <td>${pTarget.base.Defense}</td>
    </tr>
    <tr>
      <th>Speed</th>
      <td>${pTarget.base.Speed}</td>
    </tr>
    <tbody>`;
 */
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

Array.from(pokemonCard).forEach((pokemon) =>
  pokemon.addEventListener('click', () => getSelectedPokemon(pokemon))
);
