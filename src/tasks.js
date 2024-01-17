import { format } from "date-fns";

export function createTask(title, details, dueDate, priority){
    return {
      title,
      dueDate: format(dueDate, "MM/dd/yyyy"),
      priority,
      details,
      complete: false,
    }
}

export function renderTask(task){
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    const checkBox = document.createElement('button');
    checkBox.innerHTML = '☑️';
    checkBox.addEventListener('click', ()=>{
      task.complete = !task.complete;
      switch(task.complete){
        case true:
          checkBox.innerHTML = '✅';
          break;
        case false:
          checkBox.innerHTML = '☑️';
      }
    })
    
    const taskText = document.createElement('div');
    taskText.innerHTML = task.title;
    taskText.classList.add("taskText");

    const descButton = document.createElement('button')
    descButton.classList.add('descButton');
    descButton.addEventListener('click', ()=>{
      console.log(task.details);
      //Add function to view details
    });

    const dDate = document.createElement('div');
    dDate.innerHTML = task.dueDate;

    const modButton = document.createElement('button');
    modButton.classList.add('modButton');
    modButton.addEventListener('click', (e)=>{
      //add mod function
      modifyTask(e);
    })

    const delButton = document.createElement('button');
    delButton.classList.add('delButton');
    delButton.addEventListener('click', (e)=>{
      deleteTask(e);
    })

    switch (task.priority){
      case 'high':
        taskItem.setAttribute('style','border-left: 4px solid red');
        break;
      case 'medium':
        taskItem.setAttribute('style','border-left: 4px solid orange');
        break;
      case 'low':
        taskItem.setAttribute('style','border-left: 4px solid green');
        break;
    };
    
    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(descButton);
    taskItem.appendChild(dDate);
    taskItem.appendChild(modButton);
    taskItem.appendChild(delButton);

    return taskItem;
}

export function newTaskButtonInit(){
  const prioritySel = document.getElementById('taskPriority');
  const lowButton = document.getElementById('lowButton');
  const medButton = document.getElementById('medButton');
  const hiButton = document.getElementById('hiButton');
  const submit = document.getElementById('addTaskButton');

  lowButton.addEventListener('click', (e)=>{
    prioritySel.setAttribute('data-value','low');
    prioritySel.textContent = 'Low';
    e.preventDefault();
  });
  medButton.addEventListener('click', (e)=>{
    prioritySel.setAttribute('data-value','medium');
    prioritySel.textContent = 'Medium';
    e.preventDefault();
  });
  hiButton.addEventListener('click', (e)=>{
    prioritySel.setAttribute('data-value','high');
    prioritySel.textContent = 'High';
    e.preventDefault();
  });
  submit.addEventListener('click', (e)=>{
    processTask(e);
  });
}

function processTask(e) {
  let title = document.getElementById('newTitle');
  if(title !==""){
    let details = document.getElementById('newDetails');
    let date = document.getElementById('dueDate');
    let dateV = date.value;
    if(dateV === ""){
      dateV = new Date();
    }
    else{
      dateV = dateV.replace('-', '/'); //Prevent date offset
    }
    let priority = document.getElementById('taskPriority');
    const addTask = createTask(title.value, details.value, dateV, 
                              priority.getAttribute('data-value'));
    const taskList = document.getElementById('taskList');
    taskList.appendChild(renderTask(addTask));
    e.preventDefault();

    //Reset fields  
    title.value = "";
    details.value = "";
    date.value = null;
    priority.textContent = "Priority";
  }
}

function deleteTask(e){
  let selectedTask = e.target.closest('li');
  selectedTask.remove();
}

function modifyTask(e){
  let selectedTask = e.target.closest('li');
  let taskList = selectedTask.closest('ul');
  let title = selectedTask.title;
  let details = selectedTask.details;
  let dueDate = selectedTask.dueDate;
  let priority = selectedTask.priority;
  let complete = selectedTask.complete;

  console.log(selectedTask.closest('div'));
  // selectedTask.remove();
}

function viewDetails(e){
  //Function to view details of task
}



