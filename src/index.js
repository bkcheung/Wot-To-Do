import _ from 'lodash';
import { compareAsc, format } from "date-fns";
import './style.css';
import {createTask, renderTask, newTaskInput} from './tasks';

function render() {
    const page = document.createElement('div');
    page.classList.add('page');

    const header = document.createElement('div');  
    header.innerHTML = "✓✓ Wot To Do";
    header.classList.add('header');
    page.appendChild(header);

    const pageBody = document.createElement('div');
    pageBody.classList.add('pageBody');
    const projList = document.createElement('div');
    projList.innerHTML = "Today";
    projList.classList.add('projList');
    pageBody.appendChild(projList);

    const pageRight = document.createElement('div');
    pageRight.classList.add('pageRight');

    const taskList = document.createElement('div');
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
  
  document.body.appendChild(render());