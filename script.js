//overall task object
const tasker = {
    //construct
    construct: function() {
    this.selectElements();
    this.bindEvents();
    this.scanTaskList();
  },
  //task properties
  selectElements: function () {
    this.taskInput = document.getElementById("input-task");
    this.taskList = document.getElementById("tasks");

    //selects all list items within parent UL
    this.taskListChildren = this.taskList.children;
    this.addButton = document.getElementById("add-task-btn");
    this.errorMessage = document.getElementById("error")
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
    taskTrash.setAttribute("class","fa fa-trash");

    //insert trash icon inside button using append child
   taskButton.appendChild(taskTrash);

    //append elements to task list
    taskListItem.appendChild(taskCheckbox);
    taskListItem.appendChild(taskValue);
    taskListItem.appendChild(taskButton);

    //adding tasks to task list
    this.taskList.appendChild(taskListItem);
  },

    //error check 
    error: function() {
    this.errorMessage.style.display = "block";
  },


    //add task
    addTask: function() {
    let taskValue = this.taskInput.value;
    this.errorMessage.style.display = "none";
    
    if(taskValue === ""){
      this.error();
    }
    else {
      this.buildTask();
      this.taskInput.value = "";
      this.scanTaskList();
    }
};


