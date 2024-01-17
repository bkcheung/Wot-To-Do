import _ from 'lodash';
import './style.css';
import {createTask, renderTask, newTasksInit} from './tasks';
import { listStorage, storageAvailable } from './storage';
import { createProj, renderProj, renderProjList } from './projects';

//Init
newTasksInit();

//Check for existing data from storage
if(storageAvailable("localStorage")){
  console.log("Local storage is available!");
}
const projList = listStorage();

//For dev only: Adding project
// projList.push(createProj('Test'));
renderProjList(projList);
renderProj(projList[0]);





