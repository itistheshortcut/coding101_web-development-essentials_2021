console.log(pokemonData);

const main = document.querySelector('#main');

const header = document.createElement('header');
main.appendChild(header);

const title = document.createElement('h1');
header.appendChild(title);

title.innerText = 'POKEMON APP';

const section = document.createElement('section');
main.appendChild(section);

pokemonData.forEach((pokemon) => {
  let image = { image: `pokemon/${pokemon.name.english.toLowerCase()}.jpg` };
  Object.assign(pokemon, image);

  section.innerHTML += `<div class="pokemon">
    <img src=${pokemon.image} alt=${pokemon.name.english} width="60px" />
        <h4>${pokemon.name.english}</h4>
    </div>`;
});
