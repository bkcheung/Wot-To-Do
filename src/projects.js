import { renderProjTasks } from "./tasks";

export function createProj(projName, projKey){
    return{
        projName,
        projKey,
        taskList: [],
    }
}
// export function renderHomeList(){
//     const home = document.getElementById('home');
//     let homeList = JSON.parse(localStorage.getItem('homeList'));
//     for(let i=0; i <3; i++){
//         const project = renderProject(homeList[i], i, "home");
//         home.appendChild(project);    
//     }
//     localStorage.setItem('homeList', JSON.stringify(homeList));
// }
export function renderProjList(){
    const home = document.getElementById('home');
    const projects = document.getElementById('projList');
    let projList = JSON.parse(localStorage.getItem('projList'));
    clearProjects();
    for(let i = 0; i < projList.length; i++){
        if(i < 3){
            const project = renderProject(projList[i], i, "home");
            home.appendChild(project);    
        }
        else{
            const project = renderProject(projList[i], i, "project");
            projects.appendChild(project);
        }
    }
    localStorage.setItem('projList', JSON.stringify(projList));
}
function renderProject(proj, key, listType){
    const project = document.createElement('div');
    project.classList.add('project');
    const projTitle = document.createElement('button');
    projTitle.innerHTML = proj.projName;
    projTitle.classList.add('projTitle');
    projTitle.addEventListener('click', ()=>{
        renderProjTasks(key);
    })
    project.appendChild(projTitle);
    if(listType==="project"){
        const modBundle = renderModForm(proj);
        project.appendChild(modBundle[0]);
        project.appendChild(modBundle[1]);
        project.appendChild(modBundle[2]);
        const delProj = document.createElement('button');
        delProj.innerHTML = 'x';
        delProj.classList.add('delProj');
        delProj.addEventListener('click',(e)=>{
            deleteProj(e);
        });
        delProj.setAttribute('key', key);
        project.appendChild(delProj);   
    }
    proj.projKey = key;
    return project;
}   
function renderModForm(proj){
    const modForm = Object.assign(document.createElement('input'),{
        type: 'text',
        classList: 'modForm hidden',
        value: `${proj.projName}`,
    });
    modForm.addEventListener('keyup', (e)=>{
        if(e.key==='Escape'){
            toggleProjMod(e);
        }
        if(e.key==='Enter'){
            saveProjName(e);
        }
    })
    const modFormButton = Object.assign(document.createElement('button'),{
        classList: 'modFormButton hidden',
        innerHTML: '↳',
    });
    modFormButton.addEventListener('click',(e)=>{
        saveProjName(e);
    })
    const modButton = document.createElement('button');
    modButton.classList.add('projMod');
    modButton.innerHTML = '✎';
    modButton.addEventListener('click',(e)=>{
        modProjName(e);
        e.target.closest('div').querySelector('.modForm').focus();
    });
    const modBundle = [modForm, modFormButton, modButton]
    return modBundle;
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
    const listProj = document.getElementsByClassName('project');
    console.log(listProj);
    for(let i = listProj.length-1; i > -1; i--){
        listProj[i].remove();
    }
}

function modProjName(e){
    toggleProjMod(e);
}

function saveProjName(e){
    const newName = e.target.closest('div').querySelector('.modForm').value;
    if(newName !==""){ //Change name if new name populated, else, no change
        console.log(newName);
        const key = e.target.closest('div').querySelector('.delProj')
                     .getAttribute('key');
        const projList = JSON.parse(localStorage.getItem('projList'));
        projList[key].projName = newName;
        localStorage.setItem('projList', JSON.stringify(projList));
        renderProjList();
    }
    toggleProjMod(e);
}
function toggleProjMod(e){
    const projDiv = e.target.closest('div')
    const proj = projDiv.querySelector('.projTitle');
    const form = projDiv.querySelector('.modForm');
    const modFormButton =projDiv.querySelector('.modFormButton');
    const modButton = projDiv.querySelector('.projMod');
    const delButton = projDiv.querySelector('.delProj');
    proj.classList.toggle('hidden');
    form.classList.toggle('hidden');
    modFormButton.classList.toggle('hidden');
    modButton.classList.toggle('hidden');
    delButton.classList.toggle('hidden');
}