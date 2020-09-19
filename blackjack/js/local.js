'use strict';

var table = document.getElementById('scoreboard');

function makeHeaders(){
  var headersArray = ['Player Name', 'Bank Roll', 'Hands Played'];
  var trEl = document.createElement('tr');
  for ( var j = 0; j < headersArray.length; j++){
    appendElement('th', headersArray[j], trEl);
  }
  table.appendChild(trEl);
}
makeHeaders();

// loop through local storage and push the objects into an array
// Ron and Brei both helped.  Brei found the snippet of code that got us working.
function callStorage(){
  if (localStorage) {
    var keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      var trEl = document.createElement('tr');
      // loop through the keys in local storage and retrieve their data
      var tempObject = JSON.parse(localStorage.getItem(keys[i]));
      appendElement('td', tempObject.name, trEl);
      appendElement('td', tempObject.bankroll, trEl);
      appendElement('td', tempObject.turnsPlayed, trEl);
      appendElement('td', 'X', trEl);
      trEl.children[3].classList.add('removebutton');
      table.appendChild(trEl);
    }
  }
}
callStorage();

//Function to make and append new children to a parent element
function appendElement(child, content, parent){
  var newElement = document.createElement(child);
  newElement.textContent = content;
  parent.appendChild(newElement);
}

// Event handler that removes a player from storage by getting the name of the key associated with the X on the line clicked.
function removeStorage(event){
  event.preventDefault();
  if (event.target === event.target.parentElement.children[3]){
  // This looks for the name at the beginning of the row clicked
    var removeMe = event.target.parentElement.children[0].textContent;
    // and then removes it from local storage
    localStorage.removeItem(removeMe);
    // Clear the table and call the functions to rewrite it with the new local storage data
    table.innerHTML = '';
    makeHeaders();
    callStorage();
  }
}

table.addEventListener('click', removeStorage);
