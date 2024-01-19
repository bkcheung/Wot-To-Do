import { renderTask, renderProjTasks, clearTasks } from "./tasks";


export function createProj(projName, projKey){
    return{
        projName,
        projKey,
        taskList: [],
    }
}
export function renderProjList(){
    const projects = document.getElementById('projList');
    let projList = JSON.parse(localStorage.getItem('projList'));
    clearProjects();
    //Render tasks
    for(let i = 0; i < projList.length; i++){
        const project = document.createElement('div');
        project.classList.add('project');
        const projTitle = document.createElement('button');
        projTitle.innerHTML = projList[i].projName;
        projTitle.classList.add('projTitle');
        projTitle.addEventListener('click', ()=>{
            renderProjTasks(i);
        })
        project.appendChild(projTitle);
        if(i>0){
            const delProj = document.createElement('button');
            delProj.innerHTML = 'x';
            delProj.classList.add('delProj');
            delProj.addEventListener('click',(e)=>{
                deleteProj(e);
            })
            delProj.setAttribute('key', i);
            projList[i].projKey = i;
            project.appendChild(delProj);
        }
        projects.appendChild(project);
    }
    localStorage.setItem('projList', JSON.stringify(projList));
}
// export function renderProjTasks(project){
//     // const projList = localStorage.getItem('projList');
//     const taskList = document.getElementById('taskList');
//     const projTitle = document.getElementById('dispProj');
//     projTitle.innerHTML = project.projName;
//     projTitle.setAttribute('projKey', project.projKey);
//     clearTasks();
//     const tasks = project.taskList;
//     for(let i = 0; i < tasks.length; i++){
//         tasks[i].key = i;
//         taskList.appendChild(renderTask(tasks[i]));
//     }
//     // localStorage.setItem('projList', JSON.)
//     console.log(tasks);
//     return 
// }
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
    let projKey = Number((e.target).getAttribute('key'));
    let projList = JSON.parse(localStorage.getItem('projList'));

    for(let i = projList.length-1; i > -1; i--){
        if(projList[i].projKey === projKey){
            console.log(i);
            projList.splice(i,1);
            localStorage.setItem('projList', JSON.stringify(projList));
        }
    }
    renderProjList();
}

function clearProjects(){
    const projects = document.getElementById('projList');
    const listProj = projects.getElementsByClassName('project');
    for(let i = listProj.length-1; i > -1; i--){
        listProj[i].remove();
    }
}