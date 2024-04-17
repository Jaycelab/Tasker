//overall task object
const tasker = {
  //construct
  construct: function () {
    this.selectElements();
    this.bindEvents();
    this.scanTaskList();
  },
  //task properties
  selectElements: function () {
    this.taskInput = document.querySelector("#input-task");
    this.taskList = document.querySelector("#tasks");

    //selects all list items within parent UL
    this.taskListChildren = this.taskList.children;
    //add tasks button
    this.addButton = document.querySelector("#add-task-btn");
    //error message
    this.errorMessage = document.querySelector("#error");
  },

  //buildtask
  buildTask: function () {
    let taskListItem, taskCheckbox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement("li");
    taskListItem.setAttribute("class", "task");

    //check box
    taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");

    //task value
    taskValue = document.createTextNode(this.taskInput.value);

    //delete button
    taskButton = document.createElement("button");

    //trash icon utilizing font awesome
    taskTrash = document.createElement("i");
    taskTrash.setAttribute("class", "fa fa-trash");

    //insert trash icon inside button using append child
    taskButton.appendChild(taskTrash);

    //append elements to task list
    taskListItem.appendChild(taskCheckbox);
    taskListItem.appendChild(taskValue);
    taskListItem.appendChild(taskButton);

    //adding tasks to task list
    this.taskList.appendChild(taskListItem);
  },

  //error check. Default style is set to none, switching to block will display error msg
  error: function () {
    this.errorMessage.style.display = "block";
  },

  //add task method. Adds new tasks to list as opposed to build tasks (builds the HTML)
  addTask: function () {
    let taskValue = this.taskInput.value;
    this.errorMessage.style.display = "none";

    //test if task value empty string , run error func
    if(taskValue === "") {
      this.error();
    } else {
      //else run buildTask & set task input to empty string  
      this.buildtask();
      this.taskInput.value = "";
      //this.scanTaskList();
    }
  },

  //enterKey method
    enterKey: function(event){
    if (event.keyCode === 13 || event.which === 13 ){
      this.addTask();
    }
  },

  //scanTaskList method
  scanTaskList: function() {
    let taskListItem, checkBox, deleteButton;

    //loop through all list elements
    for (i = 0; i < this.taskListChildren.length; i++){
      taskListItem = this.taskListChildren[i];
      //select checkbox and delete button
      checkBox = taskListItem.getElementsByTagName("input")[0];
      deleteButton = taskListItem.getElementsByTagName("button")[0];

      //bind onclick event to the checkbox
      checkBox.onclick = this.completeTask.bind(this, taskListItem, checkBox);

      //add click event to the delete button
      deleteButton.onclick = this.deleteTask.bind(this, i);
    }
  },
};
