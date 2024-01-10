import _ from 'lodash';
import './style.css';
import addTask from './tasks';

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

    const taskList = document.createElement('div');
    taskList.innerHTML = "Exercise";
    taskList.classList.add('taskList');
    pageBody.appendChild(taskList);
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