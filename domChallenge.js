const main = document.querySelector('#main');

const header = document.createElement('header');
main.appendChild(header);


const h1 = document.createElement('h1');
header.appendChild(h1);
h1.innerText = 'Coding101 - Web Development Essentials.';

const section = document.createElement('section');
main.appendChild(section);

section.setAttribute('class', 'skillSection');

let skills = [
    { title: 'HTML', description: 'HyperTextMarkup Language.', image: 'images/html.png' },
    { title: 'CSS', description: 'Stylesheet Language.', image: 'images/css.png' },
    { title: 'JavaScript', description: 'Scripting Language.', image: 'images/js.png' },
    {title:'java',description:'Object Oriented Programming.', image:'images/htmls.png'}
]

console.log(skills);

skills.forEach(skill => {
    section.innerHTML += `<div class="skill">
    <h3>${skill.title}</h3>
    <img src=${skill.image} alt=${skill.title} width="100px" />
    <p>${skill.description}</p>
    </div>`
})
