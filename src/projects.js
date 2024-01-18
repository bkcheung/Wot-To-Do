import { renderTask, clearTasks } from "./tasks";


export function createProj(projName, projNum){
    let taskList = [];
    return{
        projName,
        taskList,
        projNum,
    }
}
export function renderProjList(){
    const projects = document.getElementById('projList');
    let projList = JSON.parse(localStorage.getItem('projList'));
    let listProj = projects.getElementsByClassName('project');
    for(let i = listProj.length-1; i > -1; i--){
        listProj[i].remove();
    }
    for(let i = 0; i < projList.length; i++){
        const project = document.createElement('div');
        project.classList.add('project');
        const projTitle = document.createElement('button');
        projTitle.innerHTML = projList[i].projName;
        projTitle.classList.add('projTitle');
        projTitle.addEventListener('click', ()=>{
            renderProj(projList[i]);
        })
        const delProj = document.createElement('button');
        delProj.innerHTML = 'x';
        delProj.classList.add('delProj');
        delProj.setAttribute('index', i);
        delProj.addEventListener('click',(e)=>{
            deleteProj(e);
        })
        project.appendChild(projTitle);
        project.appendChild(delProj);
        projects.appendChild(project);
    }
}
export function renderProjTasks(project){
    const taskList = document.getElementById('taskList');
    const projTitle = document.getElementById('projTitle');
    projTitle.innerHTML = project.projName;
    projTitle.setAttribute('index', project.projNum);
    clearTasks();
    const tasks = project.taskList;
    for(let i = 0; i < tasks.length; i++){
        taskList.appendChild(renderTask(tasks[i]));
    }
}
export function processProject(e){
    e.preventDefault();
    const title = document.getElementById('newProj');
    let numProj = Number(localStorage.getItem('numProj'));
    storeProject(createProj(title.value, numProj));
    title.value = "";
}

function storeProject(project){
    let projList = JSON.parse(localStorage.getItem('projList'));
    projList.push(project);
    localStorage.setItem('projList', JSON.stringify(projList));
    localStorage.setItem('numProj', projList.length);
    console.log(JSON.parse(localStorage.getItem('projList')));
    console.log(localStorage.getItem('numProj'));
}

function deleteProj(e){
    let projIndex = (e.target).getAttribute('index');
    let projList = JSON.parse(localStorage.getItem('projList'));
    projList.splice(projIndex,1);
    localStorage.setItem('projList', JSON.stringify(projList));
    let selProj = e.target.closest('div');
    selProj.remove();
}