let square = document.createElement('div');

let squareBox = document.querySelector('body');

squareBox.append(square);

square.style.width = '150px';
square.style.height = '150px';
square.style.border = '2px solid black';
square.style.margin = 'auto';
square.style.marginTop = '300px';
square.style.backgroundColor = '#E6894E';

let hoverChange = function(){
    square.style.backgroundColor = 'blue';
}

square.addEventListener('mouseover', hoverChange);

let changeBack = function(){
    square.style.backgroundColor = '#E6894E';
}

square.addEventListener('mouseout', changeBack);

let holdColorChange = function(){
    square.style.backgroundColor = 'red';
}

square.addEventListener('mousedown', holdColorChange);

let unHoldColorChange = function(){
    square.style.backgroundColor = 'yellow';
}

square.addEventListener('mouseup', unHoldColorChange);

let doubleClickColorChange = function(){
    square.style.backgroundColor = 'green';
}

square.addEventListener('dblclick', doubleClickColorChange);

let scrollColorChange = function(){
    square.style.backgroundColor = 'orange';
}

squareBox.addEventListener('wheel', scrollColorChange);