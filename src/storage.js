import { createProj } from "./projects";
import { createTask } from "./tasks";

export function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException 
      );
    }
  }

  export function listStorage(){
    const defaultProjList = [defaultProj()];
    let projList = localStorage.getItem('projList');
    projList =  JSON.parse(projList || JSON.stringify(defaultProjList));
    localStorage.setItem('projList',JSON.stringify(projList));
    localStorage.setItem('numProj',projList.length);

    let homeList = localStorage.getItem ('homeList');
    homeList = JSON.parse(homeList || JSON.stringify(homeProjList()));
    localStorage.setItem('homeList', JSON.stringify(homeList));
    return projList;
  }

  function defaultProj(){
    const defaultProj = createProj('New Project', 0);
    const defaultTask = createTask('Example Task',new Date(),'Low');
    defaultProj.taskList.push(defaultTask);
    return defaultProj;
  }

  function homeProjList(){
    const all = createProj('All', 0);
    const today = createProj('Today', 1);
    const week = createProj('This Week', 2);
    const homeProjList = [all, today, week];
    return homeProjList;
  }