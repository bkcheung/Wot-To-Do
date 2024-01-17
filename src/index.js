import _ from 'lodash';
import './style.css';
import {createTask, renderTask, newTasksInit} from './tasks';
import { listStorage, storageAvailable } from './storage';
import { createProj, renderProj } from './projects';

//Init
newTasksInit();

//Check for existing data from storage
if(storageAvailable("localStorage")){
  console.log("Local storage is available!");
}
const projList = listStorage();

//For dev only: Adding project
let newProj = createProj('Test');
projList.push(newProj);
renderProj(projList);

//For dev only: Adding new task
const task = createTask('Exercise','Leg day!!!',new Date(),'low');
const taskList = document.getElementById('taskList');
taskList.appendChild(renderTask(task));

 //Move this to one initialization task




