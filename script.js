//overall task object
const tasker = {
  //construct method to automate methods below
  construct: function () {
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
    //add tasks button
    this.addButton = document.getElementById("add-task-btn");
    //error message
    this.errorMessage = document.getElementById("error");
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
    if (taskValue === "") {
      this.error();
    } else {
      //else run buildTask & set task input to empty string
      this.buildTask();
      this.taskInput.value = "";
      this.scanTaskList();
    }
  },

  enterKey: function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      this.addTask();
    }
  },

  //bind events bind methods to an event
  bindEvents: function () {
    //add click event to button. Passing this as param for addTask to addButton on cick
    //whenever addButton is clicked, add Task will be called and user task added to list
    this.addButton.onclick = this.addTask.bind(this);

    //adding enter key to task input
    this.taskInput.onkeypress = this.enterKey.bind(this);
  },
  //adding onclick events to checkbox to mark tasks complete/incomplete
  //delete button to remove tasks from list
  scanTaskList: function () {
    let taskListItem, checkBox, deleteButton;

    //looping through list of elements using taskListChildren arr
    for (i = 0; i < this.taskListChildren.length; i++) {
      taskListItem = this.taskListChildren[i];

      //checkbox , s in elementtagname
      checkBox = taskListItem.getElementsByTagName("input")[0];
      //delete button
      deleteButton = taskListItem.getElementsByTagName("button")[0];

      //binding checkbox to on click
      checkBox.onclick = this.completeTask.bind(this, taskListItem, checkBox);

      //binding delete to on click
      deleteButton.onclick = this.deleteTask.bind(this, i);
    }
  },

  //delete task passing arr counter as argument with remove method
  deleteTask: function (i) {
    this.taskListChildren[i].remove();
    //calls scanTaskList after each removal
    this.scanTaskList();
  },

  //complete task method. marks tasks complete once clicked using if to verify if checked
  completeTask: function (taskListItem, checkBox) {
    if (checkBox.checked) {
      taskListItem.className = "task completed";
    } else {
      //calls incomplete task method if false
      this.incompleteTask(taskListItem);
    }
  },

  //incomplete task , marks tasks classname to task
  incompleteTask: function (taskListItem) {
    taskListItem.className = "task";
  },
};
