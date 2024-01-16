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

export function renderProj(projList){
    const projects = document.getElementById('projList');
    for(let i = 0; i < projList.length; i++){
        const projTitle = document.createElement('button');
        projTitle.innerHTML = projList[i].projName;
        projects.appendChild(projTitle);
    }
}
