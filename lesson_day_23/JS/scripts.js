console.log('Lesson Day 23 - HTML function,this keyword');


const todaysTopics = ['HTML Function',
'This keyword',
'Makeing Keyboard small project']

console.log(todaysTopics);

let contentElement = document.getElementById("content");




const topiclist = document.createElement('h2');


topicHeader.innerHTML = 'Өнөөдрийн хичээл';


let content = document.createElement('ul');

contentElement.appendChild(content);


content.appendChild(topicHeader);




let ulElement = document.createElement('ul');


for(let i = 0; i < todaysTopics.length; i++) {

    let liElement = document.createElement('li');

    liElement.innerHTML = todaysTopics[i];

    ulElement.appendChild(liElement);
}


content.appendChild(ulElement);