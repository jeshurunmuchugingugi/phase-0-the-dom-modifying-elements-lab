// Remove the main#main element from the DOM
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement('h1');

// Set the id to 'victory'
newHeader.id = 'victory';

// Replace YOUR-NAME with your actual name
newHeader.textContent = 'Jesh is the champion';

// Append the newHeader to the body (or anywhere appropriate)
document.body.appendChild(newHeader);
