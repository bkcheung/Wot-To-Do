import _ from 'lodash';
import './style.css';
import { pageInit } from './init';
import { listStorage, storageAvailable } from './storage';
import { createProj, renderProjTasks, renderProjList } from './projects';

//Check for existing data from storage
if(storageAvailable("localStorage")){
  console.log("Local storage is available!");
}
const projList = listStorage();

//Init
pageInit();
renderProjList(projList);
renderProjTasks(projList[0]);





