import { renderTask } from "./tasks";

export function projStorage(){ //make new list or load existing
    let defaultProjList = [];
    let projList = Storage.getItem('projList');
    projList = JSON.parse(projList || defaultProjList);
  }

export function createProj(projName){
    const taskList = [];
    const numTasks = taskList.length;
    return{
        projName,
        taskList,
        numTasks,
    }
}

export function renderProjList(projList){
    const projects = document.getElementById('projList');
    for(let i = 0; i < projList.length; i++){
        const projTitle = document.createElement('button');
        projTitle.innerHTML = projList[i].projName;
        projTitle.classList.add('projTitle');
        projects.appendChild(projTitle);
    }
}

export function renderProj(project){
    const taskList = document.getElementById('taskList')
    const tasks = project.taskList;
    for(let i = 0; i < tasks.length; i++){
        taskList.appendChild(renderTask(tasks[i]));
    }
}
