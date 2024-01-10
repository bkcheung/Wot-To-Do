import _ from 'lodash';
import './style.css';
import addTask from './tasks';

function genHeader() {
    const head = document.createElement('div');  
    head.innerHTML = "Wot To Do";
    head.classList.add('header');
    return head;
  }
  
  document.body.appendChild(genHeader());