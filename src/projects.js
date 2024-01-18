import { renderTask, clearTasks } from "./tasks";

function storeProject(project){
    let projList = JSON.parse(localStorage.getItem('projList'));
    projList.push(project);
    localStorage.setItem('projList', JSON.stringify(projList));
    localStorage.setItem('numProj', projList.length);

    console.log(JSON.parse(localStorage.getItem('projList')));
    console.log(localStorage.getItem('numProj'));
}
export function createProj(projName, projNum){
    let taskList = [];
    return{
        projName,
        taskList,
        projNum,
    }
}
export function renderProjList(projList){
    const projects = document.getElementById('projList');
    for(let i = 0; i < projList.length; i++){
        const projTitle = document.createElement('button');
        projTitle.innerHTML = projList[i].projName;
        projTitle.classList.add('projTitle');
        projTitle.addEventListener('click', ()=>{
            renderProj(projList[i]);
        })
        projects.appendChild(projTitle);
    }
}
export function renderProjTasks(project){
    const taskList = document.getElementById('taskList');
    const projTitle = document.getElementById('projTitle');
    projTitle.innerHTML = project.projName;
    clearTasks();
    const tasks = project.taskList;
    for(let i = 0; i < tasks.length; i++){
        taskList.appendChild(renderTask(tasks[i]));
    }
}
export function processProject(e){
    e.preventDefault();
    const title = document.getElementById('newProj');
    let numProj = String(localStorage.getItem('numProj'))+1;
    storeProject(createProj(title.value, numProj));
    title.value = "";
}