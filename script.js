// Wait for the HTML content to load before running the code
document.addEventListener("DOMContentLoaded", function() {

    // ==========================
    // Element Selection
    // ==========================
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const highlightTasksButton = document.getElementById("highlightTasksButton");
    const removeCompletedButton = document.getElementById("removeCompletedButton");

    // ==========================
    // Add Task Functionality
    // ==========================
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input text
        if (taskText) { // Only proceed if input is not empty
            const li = document.createElement("li"); // Create a new list item
            li.textContent = taskText; // Set the text of the list item
            li.classList.add("task"); // Add class for styling
            taskList.appendChild(li); // Add the list item to the task list
            taskInput.value = ""; // Clear input field after adding
        }
    }
    // Event listener for adding a task
    addTaskButton.onclick = addTask;

    // ==========================
    // Toggle Completed Status
    // ==========================
    function toggleCompleted(event) {
        if (event.target.tagName === "LI") { // Check if an <li> element was clicked
            event.target.classList.toggle("completed"); // Toggle "completed" class
        }
    }
    // Event listener for toggling completed status on task click
    taskList.onclick = toggleCompleted;

    // ==========================
    // Highlight All Tasks
    // ==========================
    function highlightTasks() {
        const tasks = document.getElementsByClassName("task"); // Get all tasks
        for (let task of tasks) { // Loop through each task
            task.style.backgroundColor = "yellow"; // Set background to highlight color
        }
    }
    // Event listener for highlighting all tasks
    highlightTasksButton.onclick = highlightTasks;

    // ==========================
    // Remove Completed Tasks
    // ==========================
    function removeCompletedTasks() {
        const completedTasks = document.querySelectorAll(".completed"); // Get completed tasks
        completedTasks.forEach(task => task.remove()); // Remove each completed task
    }
    // Event listener for removing completed tasks
    removeCompletedButton.onclick = removeCompletedTasks;

});
