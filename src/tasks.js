import { compareAsc, format } from "date-fns";
import editImage from './edit.png';
import details from './details.png';
import delImage from './delete.png';

export default function createTask(){
    return {
      title: 'Exercise!',
      description: 'Exercise for 30 minutes',
      dueDate: '01/10/2024',
      priority: 'Medium',

      render(){
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        
        const taskText = document.createElement('div');
        taskText.innerHTML = this.title;
        taskText.classList.add("taskText");

        const descButton = document.createElement('button');
        descButton.appendChild(detailIcon);

        const dDate = document.createElement('div');
        dDate.innerHTML = this.dueDate;

        const modButton = document.createElement('button');
        modButton.appendChild(editIcon);

        const delButton = document.createElement('button');
        delButton.appendChild(delIcon);

        switch (this.priority){
          case 'High':
            taskItem.setAttribute('style','border-left: 4px solid red');
            break;
          case 'Medium':
            taskItem.setAttribute('style','border-left: 4px solid orange');
            break;
          case 'Low':
            taskItem.setAttribute('style','border-left: 4px solid low');
            break;
        };

        taskItem.appendChild(taskText);
        taskItem.appendChild(descButton);
        taskItem.appendChild(dDate);
        taskItem.appendChild(modButton);
        taskItem.appendChild(delButton);

        return taskItem;
      },

      set editTitle(value){
        title = value;
      },
      set editDesc(value){
        description = value;
      },
      set editDate(value){
        dueDate = value;
      },
      set editPriority(value){
        priority = value;
      }
    }
  }

//Icons
const editIcon = new Image();
editIcon.src = editImage;
editIcon.setAttribute('style','height: 20px;');

const detailIcon = new Image();
detailIcon.src = details;
detailIcon.setAttribute('style','height: 16px;');

const delIcon = new Image();
delIcon.src = delImage;
delIcon.setAttribute('style','height: 18px;');