 const todoForm = document.getElementById('todoForm');
 const todoList = document.querySelector('.todoList');
 

 document.getElementById('Add').addEventListener('click', function(event){
    event.preventDefault();
    const text = document.querySelector('#text').value;
    let newItem = document.createElement('li');
    newItem.innerText=text;
    todoList.appendChild(newItem);
   
 // Add checkbox
  const checkBoxElemnt = document.createElement('input');
  checkBoxElemnt.type = "checkbox";
  checkBoxElemnt.classList = 'checkbox';
  newItem.appendChild(checkBoxElemnt);

   // Add delet
  const deletElemnt = document.createElement('input');
  deletElemnt.type = "button";
  deletElemnt.classList = 'deletBtn';
  deletElemnt.value = 'delet';
  newItem.appendChild(deletElemnt);

  const checkboxes = document.getElementsByClassName('checkbox');
  for (const checkbox of checkboxes) {
      checkbox.addEventListener('click', function(event) {
          // Your code to handle the click event for each checkbox
          // For example, you can toggle the 'complete' class on the parent todo item
          const listItem = event.target.closest('.newItem');
          if (listItem) {
              listItem.classList.toggle('complete');
            }
        });
    }


 todoForm.reset();
});

 



