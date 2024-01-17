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
    return projList;
  }

  function defaultProj(){
    const defaultProj = createProj('Today');
    const defaultTask = createTask('Exercise','Leg day!!!',new Date(),'low');
    defaultProj.taskList.push(defaultTask);
    return defaultProj;
  }