let form = document.getElementById('submit-form');
let list = document.getElementById('incomplete-tasks');

form.addEventListener('submit', addItem);

function addItem(event) {
   event.preventDefault();
   
   let newItem = document.getElementById('new-task').value;

   let li = document.createElement('li');
   
   li.className = 'todolist';

   li.appendChild(document.createTextNode(newItem));

   let delButton = document.createElement('button');

   delButton.className = 'delete-button';

   delButton.appendChild(document.createTextNode('Delete'));

   
   li.appendChild(delButton);
   

   list.appendChild(li);
}

  