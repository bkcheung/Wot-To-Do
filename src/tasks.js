export default function createTask(){
    return {
      title: 'Exercise!',
      description: 'Exercise for 30 minutes',
      dueDate: 'January 10 2024',
      priority: 'Medium',

      render(){
        let taskItem = document.createElement('div');
        taskItem.classList.add('task');
        
        let taskText = document.createElement('div');
        taskText.innerHTML = this.title;
        taskText.classList.add("taskText");

        taskItem.appendChild(taskText);

        const descButton = document.createElement('button');
        descButton.innerHTML = "Details";

        const modButton = document.createElement('button');
        modButton.innerHTML = "Mod";

        const delButton = document.createElement('button');
        delButton.innerHTML = "Del";

        taskItem.appendChild(descButton);
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