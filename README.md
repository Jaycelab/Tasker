# Tasker TDL

## Properties:

    tasker.taskInput - textbox input of user task
    tasker.taskList - <ul> </ul> parent of list items
    tasker.taskListChildren - <li> </li> list item children of parent <ul> </ul> taskList
    tasker.addButton - button to add new user task
    tasker.errorMessage - display error message

## Methods:

    tasker.selectElements() - Create properties by selecting document objects elements with document.getElementById() method
    	Create tasker.taskInput property by selecting "input-task" element
    	Create tasker.taskList property by selecting "tasks" element
    	Create tasker.taskListChildren  property by selecting "tasks" element children with element.children property
    	Create tasker.addButton  property by selecting "add-task-btn" element
    	Create tasker.errorMessage  property by selecting "error" element
    tasker.buildTask() - Create list item HTML of the user task being added to the to do list
    	Declare variables: taskListItem, taskCheckbox, taskValue, taskButton, taskTrash
    	Create taskListItem <li></li> element with document.createElement() method and set the attributes with element.setAttribute() method
    	Create taskCheckbox input field and set the attributes
    	Create taskValue with document.createTextNode() method by getting the value from this.taskInput.value
    	Create taskButton for deleting task list items
    	Create taskTrash icon and set the attributes
    	Append taskTrash icon to the delete button with element.appendChild() method
    	Append taskCheckbox, taskValue, and taskButton to the taskListItem
    	Append taskListItem to the taskList parent element
    tasker.error() - show the error message if the value of the user input text field is empty by setting the display value of this.errorMessage.syle property to "block"
    tasker.addTask() - add the new task to the list
    	Declare and initialize taskValue variable with this.taskInput.value
    	Remove error message by resetting this.errorMessage.style.display value to "none"
    	If taskValue is empty, display error message by calling tasker.error() method
    	Else add the new task to the list by calling tasker.buildTask() method
    	Reset tasker.taskInput.value to empty string ""
    	Call tasker.scanTaskList() method to add click events to checkbox and delete button to the new task
    tasker.enterKey() - call this.addTask() method on enter key event - keyCode 13
    tasker.bindEvents() - bind tasker.addTask() to tasker.addButton.onclick event and tasker.enterKey() to  tasker.taskInput.onkeypress by using element.bind() method
    tasker.scanTaskList() - add onclick events to checkbox to mark tasks as complete/incomplete and delete button to remove tasks from the list
    	Declare variables taskListItem, checkBox and deleteButton
    	Create the loop to loop through all tasker.taskListChildren elements
    	Set the value of taskListItem variable to current tasker.taskListChildren element by using tasker.taskListChildren[i]
    	Set the value of checkBox variable to current taskListChild checkbox by using element.getElementsByTagName() method with "input"[0] as parameter
    	Set the value of deleteButton variable to current tasker.taskListChildren button element by using element.getElementsByTagName() method with "button"[0] as parameter
    	Bind tasker.completeTask() to checkBox.onclick event by using element.bind() method. Pass the taskListItem and checkbox variables as parameters to tasker.completeTask() method.
    	Bind tasker.deleteTask() method to deleteButton.onclick event using element.bind() method and passing i counter as parameter
    tasker.deleteTask() - Delete user task from the list
    	Remove child element tasker.taskListChildren from tasker.taskList parent by using the argument from tasker.scanTaskList() method
    	Call tasker.scanTaskList()
    tasker.completeTask() - Mark user task complete (crossed out)
    	Pass variables taskListItem and checkbox as method arguments
    	If checkBox is checked set taskListItem.className to "task completed"
    	Else if checkBox is not checked call tasker.incompleteTask() method with taskListItem passed as argument
    tasker.incompleteTask() - Mark user task incomplete (not crossed out)
    	Pass taskListItem as argument and set the value of taskListItem.className property to "task"
    tasker.construct() - call tasker.selectElements(), tasker.bindEvents(), and tasker.scanTaskList() methods
