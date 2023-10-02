 const addTask = document.getElementById('Add-task');
 const taskContainer = document.getElementById('task-container');
 const inputTask = document.getElementById('input-task');

 //event listener 

 addTask.addEventListener ('click' , function(event){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement ('li');
    li.innerText = `${inputTask .value }`;

    task.appendChild(li);

    //add checkBtn 

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

 //add deletBtn 
    let deletButton = document.createElement("button");
    deletButton.innerHTML = '<i class="fa-solid fa-x"></i>';
    deletButton.classList.add('deletTask');
    task.appendChild(deletButton);


    // convert

    if (inputTask.value ===""){
        alert ('please enter a valid value');
    } else {
        taskContainer.appendChild(task);

    }
    inputTask.value ="";


    //eventlistener for checkbutton

    checkButton.addEventListener ('click' , function(){
        checkButton.parentElement.style.textDecoration ="line-through";


    })
     //eventlistener for deletbutton
        
    deletButton.addEventListener ('click' , function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
   

    });




 });