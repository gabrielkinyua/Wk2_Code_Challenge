const input = document.getElementById('itemInput'); // Input field
const addButton = document.getElementById('addButton'); // Add button
const clearButton = document.getElementById('clearButton'); // Clear list button
const shoppingList = document.getElementById('shoppingList'); // Shopping list container
const shoppingItems = [];  // Create an empty array to hold the shopping list items

// Add item to the list
addButton.addEventListener('click', () => {
    const itemText = input.value.trim();
    if (itemText !== '') {
        // Add the item to the array
        shoppingItems.push(itemText);

        // Create a new list item and add it to the DOM
        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        // Mark as purchased on click
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('purchased');
        });

        shoppingList.appendChild(listItem);
        input.value = ''; // Clear the input field
    }
});


// Clear the list
clearButton.addEventListener('click', () => {
    shoppingList.textContent = ''; // Remove all items from the list
    shoppingItems.length = 0; // Clear the array
});
