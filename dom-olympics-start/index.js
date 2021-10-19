// creating a header and adding text to header

let headerText = document.getElementById('header');

// pratice
// let h1 = document.createElement("h1").innerHTML = 'hello';
// headerText.append(h1); 

headerText.innerHTML = '<h1 id"textForHeader">JavaScript made this!!!</h1> <div id="divText"> <h3 id="name">Jon</h3> <h3 id"textAfterName">wrote this JavaScript</h3></div>';

// using JS to make css changes to header

headerText.style.textAlign = 'center';
headerText.style.fontSize = '20px';

let textDiv = document.getElementById('divText');
textDiv.style.display = 'flex';
textDiv.style.justifyContent = 'center';

let firstName = document.getElementById('name');
firstName.style.paddingRight = '5px';
firstName.style.color = 'red';

// changing left and right messages

let messagesLeft = document.getElementsByClassName('left');
messagesLeft[0].innerHTML = 'Do you want pizza?';
messagesLeft[1].innerHTML = 'Why not?';


let messageRight = document.getElementsByClassName('right');
messageRight[0].innerHTML = 'No!';
messageRight[1].innerHTML = 'It makes me gassy...';

// adding an event listener to clear text

let clearAllText = document.getElementById('clear-button');

let clearText = function(){
    messagesLeft[0].innerHTML = '';
    messagesLeft[0].style.backgroundColor = 'white';
    messageRight[0].innerHTML = '';
    messageRight[0].style.backgroundColor = 'white';
    messagesLeft[1].innerHTML = '';
    messagesLeft[1].style.backgroundColor = 'white';
    messageRight[1].innerHTML = '';
    messageRight[1].style.backgroundColor = 'white';
}

clearAllText.addEventListener('click', clearText);
