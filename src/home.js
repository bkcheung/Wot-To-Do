import { renderTask, clearTasks } from "./tasks";
const dayjs = require('dayjs');
const isToday = require('dayjs/plugin/isToday');
dayjs.extend(isToday);

export function dispAllTasks(){
    const projList = JSON.parse(localStorage.getItem('projList'));
    const taskList = document.getElementById('taskList');
    const projTitle = document.getElementById('dispProj');
    clearTasks();
    projTitle.innerHTML = 'All Tasks';
    // projTitle.setAttribute('projID', 'All');
    for(let i=0; i<projList.length; i++){
        const tasks = projList[i].taskList;
        for(let i=0; i<tasks.length; i++){
            taskList.appendChild(renderTask(tasks[i]));
        }
    }
    return
}

export function dispTodayTasks(){
    const projList = JSON.parse(localStorage.getItem('projList'));
    const taskList = document.getElementById('taskList');
    const projTitle = document.getElementById('dispProj');
    clearTasks();
    projTitle.innerHTML = 'Today';
    // projTitle.setAttribute('projID', 'Today');
    for(let i=0; i<projList.length; i++){
        const tasks = projList[i].taskList;
        for(let i=0; i<tasks.length; i++){
            if(dayjs(tasks[i].dueDate).isToday()){
                taskList.appendChild(renderTask(tasks[i]));
            }
        }
    }
    return
}