const main = document.querySelector('#main');

let list = document.createElement('ul');
main.appendChild(list);

let names = ['mostafa', 'Katja', 'Hanna', 'John', 'Ali', 'Kritina', 'Jessi'];

const listItem = item => {
  return list.innerHTML += `<li>${item}</li>`;
}
names.forEach((name) => listItem(name));



let heading = document.createElement('h2');

main.appendChild(heading);

heading.innerText = 'Hello everyone!';

heading.textContent = 'Hello me!';

/* heading.setAttribute('class', 'hello h2'); */
heading.setAttribute('style', 'color: red');

/* heading.setAttribute('style', 'margin: 20px'); */
heading.style.margin = '20px';
console.log(heading.classList);

let link = document.createElement('a');

main.appendChild(link);

link.innerText = 'this link';
link.setAttribute('href', 'https://theshortcut.org');
link.removeAttribute('href');



let messages = [
  'This is an error.',
  'how success it is.',
  'do you get any warning',
  'all is fine!',
];

const container = document.createElement('div');
main.appendChild(container);

messages.forEach(msg => {
  container.innerHTML += `<p>${msg}</p>`
});

const msgs = document.querySelectorAll('p');

msgs.forEach(msg => {
  if (msg.innerText.includes('error')) {
    msg.classList.add('error')
  } else if (msg.innerText.includes('warning')) {
    msg.classList.add('warning')
  } else if (msg.innerText.includes('success')) {
    msg.classList.add('success')
  } else {
    msg.setAttribute('style', 'font-size: 2rem');
  }
});


let users = [
  { name: 'Alina', email: 'alina@me.com', location: 'Helsinki' },
  { name: 'Divyansh', email: 'divyansh@me.com', location: 'Espoo' },
  { name: 'joanna', email: 'joanna@me.com', location: 'Helsinki' },
  { name: 'Andrea', email: 'andrea@me.com', location: 'vantaa' },
  { name: 'mostafa', email: 'mostafa@me.com', location: 'Helsinki' },
  { name: 'Alina', email: 'alina@me.com', location: 'Helsinki' },
  { name: 'Divyansh', email: 'divyansh@me.com', location: 'Espoo' },
  { name: 'joanna', email: 'joanna@me.com', location: 'Helsinki' },
  { name: 'Andrea', email: 'andrea@me.com', location: 'vantaa' },
  { name: 'mostafa', email: 'mostafa@me.com', location: 'Helsinki' },
  { name: 'Alina', email: 'alina@me.com', location: 'Helsinki' },
  { name: 'Divyansh', email: 'divyansh@me.com', location: 'Espoo' },
  { name: 'joanna', email: 'joanna@me.com', location: 'Helsinki' },
  { name: 'Andrea', email: 'andrea@me.com', location: 'vantaa' },
  {name:'mostafa', email:'mostafa@me.com',location:'Helsinki' },
];

const userContainer = document.createElement('section');
main.appendChild(userContainer);

userContainer.setAttribute('class', 'wrapper');

users.forEach(user => {
  userContainer.innerHTML += `<div class="card">
  <p>Name: ${user.name}</p>
  <p>Email: ${user.email}</p>
  <p>Location: ${user.location} </p>
  </div>`
})



