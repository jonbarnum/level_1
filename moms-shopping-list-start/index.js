let addShoppingItem = document.addItem;

addShoppingItem.addEventListener('submit', function(event){

    // creates title new food items
    event.preventDefault();
    let foodItem = addShoppingItem.title.value;
    let newFoodItem = document.createElement('li')
    document.getElementById('list').append(newFoodItem);
    newFoodItem.append(foodItem);
    // clears form input after you submit new food item
    addShoppingItem.title.value = '';

    // creates buttons for food items
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    let foodDiv = document.createElement('div');
    document.getElementById('list').append(foodDiv);
    foodDiv.append(editButton);
    foodDiv.append(deleteButton);
    editButton.innerHTML = 'edit';
    deleteButton.innerHTML = 'X';

    // event handler to delete buttons and food title
    deleteButton.addEventListener('click', function(e){
        e.preventDefault();
        newFoodItem.remove();
        foodDiv.remove();
    })
})
