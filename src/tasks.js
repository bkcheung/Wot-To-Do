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

    const taskMain = document.createElement('div');
    taskMain.classList.add('taskMain');

    //Hidden Task mod form
    const modForm = taskModForm(task);

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
      case 'High':
        taskItem.setAttribute('style','border-left: 4px solid red');
        break;
      case 'Med':
        taskItem.setAttribute('style','border-left: 4px solid orange');
        break;
      case 'Low':
        taskItem.setAttribute('style','border-left: 4px solid green');
        break;
    };
    
    taskMain.appendChild(checkBox);
    taskMain.appendChild(taskText);
    taskMain.appendChild(dDate);
    taskMain.appendChild(modButton);
    taskMain.appendChild(delButton);
    taskItem.appendChild(taskMain);
    taskItem.appendChild(modForm);

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
function taskModForm(task){
  const tmodForm = Object.assign(document.createElement('form'),{
    classList: 'taskModForm hidden',
  });
  const tmodTop = Object.assign(document.createElement('div'),{
    classList: 'newTaskBody',
  });
  const modTitle = Object.assign(document.createElement('input'), {
    type: 'text',
    classList: 'newTaskTitle',
    value: `${task.title}`
  });
  const modDate = Object.assign(document.createElement('input'), {
    type: 'date',
    classList: 'dueDateSet',
    value: `${format(task.dueDate, "yyyy-MM-dd")}`
  });
  tmodTop.appendChild(modTitle);
  tmodTop.appendChild(modDate);
  tmodForm.appendChild(tmodTop);
  const modButtons = Object.assign(document.createElement('div'),{
    classList: 'newTaskButtons',
  });
  const modDropDown = Object.assign(document.createElement('div'),{
    classList: 'dropDown',
  });
  const prioritySel = Object.assign(document.createElement('div'),{
    classList: 'prioritySel',
    innerHTML: `${task.priority}`,
  });
  const dropContent = Object.assign(document.createElement('div'),{
    classList: 'dropContent',
  });
  const lowButton = Object.assign(document.createElement('button'),{
    classList: 'lowButton',
    innerHTML: 'Low'
  });
  lowButton.addEventListener('click', (e)=>{
    prioritySel.innerHTML = 'Low';
    e.preventDefault();
  })
  const medButton = Object.assign(document.createElement('button'),{
    classList: 'medButton',
    innerHTML: 'Med'
  });
  medButton.addEventListener('click', (e)=>{
    prioritySel.innerHTML = 'Med';
    e.preventDefault();
  })
  const hiButton = Object.assign(document.createElement('button'),{
    classList: 'hiButton',
    innerHTML: 'High'
  });
  hiButton.addEventListener('click', (e)=>{
    prioritySel.innerHTML = 'High';
    e.preventDefault();
  })
  const modButton = Object.assign(document.createElement('button'),{
    type: 'submit',
    innerHTML: 'Modify',
    classList: 'submit',
  });
  modButton.addEventListener('click', (e)=>{
    processModTask(e);
  });

  dropContent.appendChild(lowButton);
  dropContent.appendChild(medButton);
  dropContent.appendChild(hiButton);
  modDropDown.appendChild(prioritySel);
  modDropDown.appendChild(dropContent);
  modButtons.appendChild(modDropDown);
  modButtons.appendChild(modButton);
  tmodForm.appendChild(modButtons);
  return tmodForm;
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
    priority.setAttribute('data-value','Low');
  }
}
function processModTask(e){
  e.preventDefault();
  const modTask = e.target.closest('form');
  const modTitle = modTask.querySelector('.newTaskTitle').value;
  let modDate = modTask.querySelector('.dueDateSet').value;
  const modP = modTask.querySelector('.prioritySel').innerHTML;
  const projList = JSON.parse(localStorage.getItem('projList'));
  const projKey = document.getElementById('dispProj').getAttribute('projKey');
  const taskKey = e.target.closest('li').getAttribute('key');
  //Update in storage
  const task = projList[projKey].taskList[taskKey];
  task.title = modTitle;
  task.dueDate = format(modDate, "MM/dd/yyyy");
  task.priority = modP;
  console.log(task);
  localStorage.setItem('projList', JSON.stringify(projList));
  toggleTaskMod(e);
  renderProjTasks(projKey);
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
  toggleTaskMod(e);
}
function toggleTaskMod(e){
  const task = e.target.closest('li');
  const taskMain = task.querySelector('.taskMain');
  const modForm = task.querySelector('.taskModForm');
  modForm.classList.toggle('hidden');
  taskMain.classList.toggle('hidden');
}
function storeTask(task){
  const index = document.getElementById('dispProj').getAttribute('projKey');
  let projList = JSON.parse(localStorage.getItem('projList'));
  let taskList = projList[index].taskList;
  taskList.push(task);
  localStorage.setItem('projList',JSON.stringify(projList));
  renderProjTasks(index);
}
