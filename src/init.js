import { processTask } from "./tasks";
import { processProject } from "./projects";

export function pageInit(){
    const prioritySel = document.getElementById('taskPriority');
    const lowButton = document.getElementById('lowButton');
    const medButton = document.getElementById('medButton');
    const hiButton = document.getElementById('hiButton');
    const submit = document.getElementById('addTaskButton')
    const addProj = document.getElementById('addProj');
    const addProjSubmit = document.getElementById('subProj')

    addProj.addEventListener('click', ()=>{
        toggleProjAdd();
    })
    addProjSubmit.addEventListener('click', (e)=>{
        processProject(e);
        toggleProjAdd();
    })
    addTask.addEventListener('click', ()=>{
        toggleTaskAdd();
    })
    lowButton.addEventListener('click', (e)=>{
      prioritySel.setAttribute('data-value','low');
      prioritySel.textContent = 'Low';
      e.preventDefault();
    });
    medButton.addEventListener('click', (e)=>{
      prioritySel.setAttribute('data-value','medium');
      prioritySel.textContent = 'Medium';
      e.preventDefault();
    });
    hiButton.addEventListener('click', (e)=>{
      prioritySel.setAttribute('data-value','high');
      prioritySel.textContent = 'High';
      e.preventDefault();
    });
    submit.addEventListener('click', (e)=>{
      processTask(e);
      toggleTaskAdd();
    });
  }

function toggleTaskAdd(){
    const addTask = document.getElementById('addTask');
    const addTaskForm = document.getElementById('newTaskInput')
    addTask.classList.toggle('hidden');
    addTaskForm.classList.toggle('hidden');
}

function toggleProjAdd(){
    const addProj = document.getElementById('addProj');
    const addProjForm = document.getElementById('projForm');
    addProj.classList.toggle('hidden');
    addProjForm.classList.toggle('hidden');
}