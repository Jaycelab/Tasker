//overall task object
const tasker = {
  selectElements: function () {
    this.taskInput = document.querySelector("#input-task");
    this.taskList = document.querySelector("#task");
    //selects all list items within parent UL
    this.taskListChildren = this.taskList.children;
    this.addbutton = document.querySelector("#add-task-btn");
    this.errorMessage = document.querySelector("#error");
  },
};
