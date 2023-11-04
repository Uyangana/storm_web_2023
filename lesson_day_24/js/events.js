console.log("JS Lesson Day 24 - JS events");

const paint = function (element) {
    console.log(element);
    element.style.color = 'purple';
}






const color = 
['red',
'blue',
'yellow',
'purple',
'green',
'pink'
];
console.log(colors[0]);
const paintElement = (elEvent) => {
let randomIndex = Math.floor(Math.random() * colors.length);
console.log(elEvent);
elEvent.target.style.color = colors[randomIndex];
}


let ulElement = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    let liElement = document.createElement('li');
    liElement.innerHTML = 'Element - ' + i;
    ulElement.appendChild(liElement);
}


let contentElement = document.getElementById('content');
contentElement.appendChild(ulElement);