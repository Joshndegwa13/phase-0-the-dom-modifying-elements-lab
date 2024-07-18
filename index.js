// Step 1: Remove main#main from index.html
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

// Step 2: Create newHeader variable pointing to an <h1> node with id of 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Step 3: Set text content of newHeader to 'YOUR-NAME is the champion'
newHeader.textContent = 'YOUR-NAME is the champion';  // Replace YOUR-NAME with your actual name

// Append newHeader to the body or any desired location in the DOM
document.body.append(newHeader);
