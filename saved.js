const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
// const entryTextbox = document.getElementsByClassName('entry-textbox');
//by replacing getElementsByClassName() by querySelect() i can refactor line 21 to,
const entryTextbox = document.querySelector('.entry-textbox');

/*
  - Inside the addEntryToDom function, create a new variable named entryDiv.
  - Use the document.createElement method to create an html Div and make it the
      new variable's value.
  - On a new line, give the new div a class of 'single-entry'.
  - Change the div's innerText property to the user's input from the textbox
  - Use the appendChild method to add the new div to the entriesSection
      variable created on line 2
*/

function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entriesSection.appendChild(entryDiv);
    // console.log(entryTextbox[0].value);
    console.log(entryTextbox.value);
}

entryForm.addEventListener('submit', addEntryToDom)