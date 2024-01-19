import { renderProjTasks } from "./tasks";

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
            //Hidden mod form
            const modForm = Object.assign(document.createElement('input'),{
                type: 'text',
                classList: 'modForm hidden',
            });
            project.appendChild(modForm);
            //Submit mod form
            const modFormButton = Object.assign(document.createElement('button'),{
                classList: 'modFormButton hidden',
                innerHTML: '↳',
            });
            modFormButton.addEventListener('click',(e)=>{
                saveProjName(e);
            })
            project.appendChild(modFormButton);
            //Mod button
            const modButton = document.createElement('button');
            modButton.classList.add('projMod');
            modButton.innerHTML = '✎';
            modButton.addEventListener('click',(e)=>{
                modProjName(e);
            })
            project.appendChild(modButton);
            //Del button
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

function modProjName(e){
    // first add a mod button, then comibne with delete button
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