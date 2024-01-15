import { compareAsc, format, sub } from "date-fns";

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
    });

    const dDate = document.createElement('div');
    dDate.innerHTML = task.dueDate;

    const modButton = document.createElement('button');
    modButton.classList.add('modButton');
    modButton.addEventListener('click', ()=>{
      let newTitle = prompt("Enter a new title");
      task.title = newTitle;
      taskText.innerHTML = task.title;
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

export function newTaskInput(){
  const container = Object.assign(document.createElement('form'), {
    classList: 'newTaskInput',
  });

  const newTitle = Object.assign(document.createElement('input'), {
    type: 'text',
    classList: 'newTaskTitle',
    id: 'newTitle',
    placeholder: 'Enter Task',
    required: true,
  });

  const body = Object.assign(document.createElement('div'),{
    classList: 'newTaskBody'
  })

  const newDetails = Object.assign(document.createElement('input'), {
    type: 'text',
    classList: 'newDetails',
    id: 'newDetails',
    placeholder: 'Details',
  });

  const newTaskButtons = document.createElement('div');
  newTaskButtons.classList.add('newTaskButtons');

  const dDate = Object.assign(document.createElement('input'), {
    type: 'date',
    classList: 'dueDateSet',
    id: 'dueDate',
  });

  //Priority Drop-down
  const dropDown = Object.assign(document.createElement('div'),{
    classList: 'dropDown',
  });
  const priButton = Object.assign(document.createElement('button'),{
    classList: 'priButton',
    innerHTML: 'Priority'
  });
  const dropContent = Object.assign(document.createElement('div'),{
    classList: 'dropContent',
  });
  const lowButton = Object.assign(document.createElement('button'),{
    innerHTML: 'Low',
  });
  const medButton = Object.assign(document.createElement('button'),{
    innerHTML: 'Med',
  });
  const hiButton = Object.assign(document.createElement('button'),{
    innerHTML: 'High',
  });
  dropContent.appendChild(lowButton);
  dropContent.appendChild(medButton);
  dropContent.appendChild(hiButton);

  // priButton.appendChild(dropContent);
  dropDown.appendChild(priButton);
  dropDown.appendChild(dropContent);


  //Add Task Button
  const submit = Object.assign(document.createElement('input'),{
    type: 'submit',
    value: 'Add',
    classList: 'submit',
  });
  submit.addEventListener('click', (e)=>{
    processTask(e);
  });

  newTaskButtons.appendChild(dropDown);
  newTaskButtons.appendChild(submit);

  container.appendChild(newTitle);
  body.appendChild(newDetails);
  body.appendChild(dDate);
  container.appendChild(body);
  container.appendChild(newTaskButtons);

  return container;
}

function processTask(e) {
  let title = document.getElementById('newTitle').value;
  if(title !==""){
    let details = document.getElementById('newDetails').value;
    let date = document.getElementById('dueDate').value;
    if(date === ""){
      date = new Date();
    }
    else{
      date = date.replace('-', '/'); //Prevent date offset
    }
    const addTask = createTask(title, details, date, 'low');
    const taskList = document.getElementById('taskList');
    taskList.appendChild(renderTask(addTask));
    e.preventDefault();
  }
}

function deleteTask(e){
  let selectedTask = e.target.closest('li');
  selectedTask.remove();
}
