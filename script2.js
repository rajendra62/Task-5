// Load tasks from localStorage when page loads
document.addEventListener('DOMContentLoaded', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText) {
        addTaskToDOM(taskText);
        saveTasks();
        input.value = '';
    }
}

function addTaskToDOM(taskText) {
    const list = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    list.appendChild(li);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push(li.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}