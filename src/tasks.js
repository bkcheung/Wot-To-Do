import { format } from "date-fns";

export function createTask(title, dueDate, priority){
    return {
      title,
      dueDate: format(dueDate, "MM/dd/yyyy"),
      priority,
      key: 0,
      complete: false,
    }
}
export function renderTask(task){
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.setAttribute('key', task.key);

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
    taskItem.appendChild(dDate);
    taskItem.appendChild(modButton);
    taskItem.appendChild(delButton);

    return taskItem;
}
export function renderProjTasks(projIndex){
  const projList = JSON.parse(localStorage.getItem('projList'));
  let project = projList[projIndex];
  const taskList = document.getElementById('taskList');
  const projTitle = document.getElementById('dispProj');
  projTitle.innerHTML = project.projName;
  projTitle.setAttribute('projKey', project.projKey);
  clearTasks();
  const tasks = project.taskList;
  for(let i = 0; i < tasks.length; i++){
      tasks[i].key = i;
      taskList.appendChild(renderTask(tasks[i]));
  }
  localStorage.setItem('projList', JSON.stringify(projList));
  return 
}
export function clearTasks(){
  let tasks = document.getElementsByTagName('li');
  for (let i = tasks.length-1; i > -1; i--){
    tasks[i].remove();
  }
}
export function processTask(e) {
  let title = document.getElementById('newTitle');
  if(title !==""){
    let date = document.getElementById('dueDate');
    let dateV = date.value;
    if(dateV === ""){
      dateV = new Date();
    }
    else{
      dateV = dateV.replace('-', '/'); //Prevent date offset
    }
    let priority = document.getElementById('taskPriority');
    const addTask = createTask(title.value, dateV, 
                              priority.getAttribute('data-value'));
    storeTask(addTask);
    e.preventDefault();

    //Reset fields  
    title.value = "";
    date.value = null;
    priority.textContent = "Priority";
    priority.setAttribute('data-value','low');
  }
}
function deleteTask(e){
  const index = document.getElementById('dispProj').getAttribute('projKey');
  let projList = JSON.parse(localStorage.getItem('projList'));
  let selectedTask = e.target.closest('li');
  let taskKey = Number(selectedTask.getAttribute('key'));
  let taskList = projList[index].taskList;
  for (let i = taskList.length-1; i > -1; i--){
    if(Number(taskList[i].key) === taskKey){
      projList[index].taskList.splice(i,1);
      localStorage.setItem('projList',JSON.stringify(projList));
    }
  }
  renderProjTasks([index]);
}
function modifyTask(e){
  let selectedTask = e.target.closest('li');
  let taskList = selectedTask.closest('ul');
  let title = selectedTask.title;
  let dueDate = selectedTask.dueDate;
  let priority = selectedTask.priority;
  let complete = selectedTask.complete;

  console.log(selectedTask.closest('div'));
  // selectedTask.remove();
}


function storeTask(task){
  const index = document.getElementById('dispProj').getAttribute('projKey');
  let projList = JSON.parse(localStorage.getItem('projList'));
  let taskList = projList[index].taskList;
  taskList.push(task);
  localStorage.setItem('projList',JSON.stringify(projList));
  renderProjTasks(index);
}
