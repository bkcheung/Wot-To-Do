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
    const defaultProjList = defaultList();
    let projList = localStorage.getItem('projList');
    projList =  JSON.parse(projList || JSON.stringify(defaultProjList));
    localStorage.setItem('projList',JSON.stringify(projList));
    localStorage.setItem('numProj',projList.length);
    return projList;
  }

  function defaultList(){
    const all = createProj('All Tasks', 0);
    const today = createProj('Today', 1);
    const week = createProj('This Week', 2);
    const newProj = createProj('New Project', 3);
    const defaultTask = createTask('Example Task',new Date(),'Low');
    newProj.taskList.push(defaultTask);
    const defaultList = [all, today, week, newProj];
    return defaultList;
  }