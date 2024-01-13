import { compareAsc, format, sub } from "date-fns";
import editImage from './edit.png';
import detailImage from './details.png';
import delImage from './delete.png';

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
    const taskItem = document.createElement('div');
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

    const descButton = document.createElement('button');
    descButton.appendChild(detailIcon);
    descButton.addEventListener('click', ()=>{
      console.log(task.details);
    });

    const dDate = document.createElement('div');
    dDate.innerHTML = task.dueDate;

    const modButton = document.createElement('button');
    modButton.appendChild(editIcon);
    modButton.addEventListener('click', ()=>{
      let newTitle = prompt("Enter a new title");
      task.title = newTitle;
      taskText.innerHTML = task.title;
    })

    const delButton = document.createElement('button');
    delButton.appendChild(delIcon);

    switch (task.priority){
      case 'high':
        taskItem.setAttribute('style','border-left: 4px solid red');
        break;
      case 'medium':
        taskItem.setAttribute('style','border-left: 4px solid orange');
        break;
      case 'low':
        taskItem.setAttribute('style','border-left: 4px solid low');
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
    id: 'newTitle',
    placeholder: 'Enter Task',
    classList: 'newTaskTitle',
  });

  const newDetails = Object.assign(document.createElement('input'), {
    type: 'text',
    id: 'newDetails',
    placeholder: 'Enter additional details',
  });

  const newTaskButtons = document.createElement('div');
  // const priorityDropdown = document.createElement('div');
  // priorityDropdown.classList.add('dropdown');
  const priButton = document.createElement('input');
  priButton.classList.add('priButton');
  priButton.innerHTML = "Priority";
  const lowButton = document.createElement('button');
  lowButton.innerHTML = "Low";
  priButton.appendChild(lowButton);
  // priorityDropdown.appendChild(priButton);

  const submit = Object.assign(document.createElement('input'),{
    type: 'button',
    value: 'Add',
  });

  submit.addEventListener('click', (e)=>{
    processTask(e);

  });



  newTaskButtons.appendChild(submit);
  // newTaskButtons.appendChild(priButton);

  container.appendChild(newTitle);
  container.appendChild(newDetails);
  container.appendChild(newTaskButtons);

  return container;
}

function processTask(e) {
  let title = document.getElementById('newTitle').value;
  let details = document.getElementById('newDetails').value;

  const addTask = createTask(title, details, new Date(), 'low');
  const taskList = document.getElementById('taskList');
  
  taskList.appendChild(renderTask(addTask));
}


//Icons
const editIcon = new Image();
editIcon.src = editImage;
editIcon.setAttribute('style','height: 20px;');

const detailIcon = new Image();
detailIcon.src = detailImage;
detailIcon.setAttribute('style','height: 16px;');

const delIcon = new Image();
delIcon.src = delImage;
delIcon.setAttribute('style','height: 18px;');

