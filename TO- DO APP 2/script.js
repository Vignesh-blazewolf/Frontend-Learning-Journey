let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks on page load
window.onload = function () {
    tasks.forEach(task => renderTask(task));
};

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask(taskText);
    input.value = "";
}

function renderTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function () {
        li.remove();
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
}