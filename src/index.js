import _ from 'lodash';
import './style.css';
import {createTask, renderTask, newTaskInput} from './tasks';
import { listStorage, storageAvailable } from './storage';
import { createProj, renderProj } from './projects';

function render() {
    const page = document.createElement('div');
    page.classList.add('page');

    const header = document.createElement('header');  
    header.innerHTML = "✓✓ Wot To Do";
    page.appendChild(header);

    const pageBody = document.createElement('main');
    pageBody.classList.add('pageBody');
    const projList = document.createElement('div');
    projList.classList.add('projList');
    projList.setAttribute('id','projList');
    pageBody.appendChild(projList);

    const pageRight = document.createElement('div');
    pageRight.classList.add('pageRight');

    const taskList = document.createElement('ul');
    taskList.classList.add('taskList');
    taskList.setAttribute('id','taskList');

    const task = createTask('Exercise','Leg day!!!',new Date(),'low');
    taskList.appendChild(renderTask(task));

    const addTaskSection = document.createElement('div');
    addTaskSection.classList.add('addTaskSection');

    const newTask = newTaskInput();
    addTaskSection.appendChild(newTask);

    pageRight.appendChild(taskList);
    pageRight.appendChild(addTaskSection);
    pageBody.appendChild(pageRight);
    page.appendChild(pageBody);

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const year = new Date().getFullYear();

    const github = document.createElement('a');
    github.classList.add('github');
    github.href = "https://github.com/bkcheung",
    github.innerHTML = "bkcheung";
    footer.innerHTML = `Copyright © ${year} `;
    footer.appendChild(github);
    page.appendChild(footer);

    return page;
  }
  
  if(storageAvailable("localStorage")){
    console.log("Local storage is available!");
  }
  const projList = listStorage();

  let newProj = createProj('New Project');
  projList.push(newProj);

  document.body.appendChild(render());

  renderProj(projList);


