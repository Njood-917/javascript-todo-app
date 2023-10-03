const addTask = document.getElementById('Add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const checkboxes = document.querySelectorAll('.checkboxInput');
const counter = document.getElementById('todo-counter');
const completedCounter = document.getElementById('completed-counter');

//event listener 

addTask.addEventListener ('click' , function(event){

   event.preventDefault();


   let task = document.createElement('div');
   task.classList.add('task');

   let li = document.createElement ('li');
   li.innerText = `${inputTask .value }`;  // some change  li.innerText = inputTask.value;
   task.appendChild(li);

   // Append the task div to the task container
   taskContainer.appendChild(task);

   //add checkBtn 

   let checkboxInput = document.createElement("input");
   checkboxInput.type = "checkbox";
   checkboxInput.classList.add('checkboxInput');
   task.appendChild(checkboxInput);


//add deletButton
   let deletButton = document.createElement("button");
   deletButton.innerHTML = '<i class="fa-solid fa-x"></i>';
   deletButton.classList.add('deletTask');
   task.appendChild(deletButton);

   // Add editBtn 

   let editButton = document.createElement("button");
   editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
   editButton.classList.add('editTask');
   task.appendChild(editButton);


   // convert

   if (!inputTask.value){
       alert ('please enter a valid value');
       task.remove();  // Remove the task if input is empty
   } else {
      taskContainer.appendChild(task);

    inputTask.value ="";  


   //eventlistener for checkbutton

   checkboxInput.addEventListener ('click' , function(){
       if (li.style.textDecoration =="line-through") {
           li.style.textDecoration = "none"
       } else {
           li.style.textDecoration = "line-through"
       }
       updateCounters(); 
   }); 
   
  
    //eventlistener for deletbutton
       
   deletButton.addEventListener ('click' , function(e){
       if (task){
           task.remove();
       }
       updateCounters(); 
   });
   editButton.addEventListener ('click' , function(e){
       
       const input = document.createElement('input');
       input.type = 'text';
       input.value =  li.innerText;
       li.replaceWith(input);
       input.focus();
       input.classList.add('inputTask');

       input.addEventListener('blur', function () {
           const updatedLi = document.createElement('li');
           updatedLi.innerText = input.value;

           input.replaceWith(updatedLi);

       });


});
   
   }
   inputTask.value = "";
   updateCounters();
});


function updateCounters() {
   const totalItems = document.querySelectorAll('.task');
   const completedTasks = document.querySelectorAll('.task li[style="text-decoration: line-through;"]');
  counter.textContent = totalItems.length;
   completedCounter.textContent = completedTasks.length;
  console.log(counter , completedTasks);

}


