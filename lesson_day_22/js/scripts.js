console.log('Lesson Day 22 - JS DOM - HTML function');



let h2Element = document.createElement('h2');
h2Element.innerText = 'My Favorite Foods';
h2Element.setAttribute('class', 'my-favorite-food');

let contentElement = document.getElementById('content');
contentElement.appendChild(h2Element);


let foods = ['Buuz','Huushuur','Tsuivan','Horhog','Tsartsaamag'];
let ulElement = document.createElement('ul');
for (let i = 0; i <foods.length; i++) {
  let liElement = document.createElement('li');
  liElement.innerText = foods[i];
  ulElement.appendChild(liElement);
}

contentElement.appendChild(ulElement)


let h4Element = document.createElement('h4');
h4Element.innerHTML = 'Minii Durtai Hoolnuud';

contentElement.insertBefore(h4Element, ulElement);


console.log('Lesson Day 22 - JS DOM - HTML function');

let clickMeButton = document.createElement('button')
clickMeButton.innerText = 'Click Me';
clickMeButton.setAttribute('style','border: 1px solid red; padding: 10px; font-size: 20px;');

contentElement.appendChild(clickMeButton);

function showAlert() {
    alert('Hello World');
}

clickMeButton.addEventListener('click',showAlert);