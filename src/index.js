document.addEventListener('DOMContentLoaded', function() {
  const createTaskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;
    if (taskDescription) {
      const newTask = document.createElement('li');
      newTask.innerHTML = `<span class='task'> ${taskDescription} </span>
      <button class='editBtn'> Edit </button>`;
      taskList.appendChild(newTask);
      document.getElementById('new-task-description').value = '';
    }
  });

  taskList.addEventListener('click', function(e) {
    const clickedEle = e.target;

    if (clickedEle.classList.contains('editBtn')) {
      const taskItem = clickedEle.parentElement;
      const taskSpan = taskItem.querySelector('.task');
      const taskText = taskSpan.textContent;

      // Toggle edit mode for the task description
      taskSpan.contentEditable = !taskSpan.contentEditable;
      if (taskSpan.contentEditable) {
        taskSpan.focus();
        clickedEle.textContent = 'Save';
      } else {
        clickedEle.textContent = 'Edit';
      }

      clickedEle.classList.toggle('saveButton');

      // Save changes when "Save" is clicked
      if (!taskSpan.contentEditable) {
        taskText = taskSpan.textContent;
      }
    }
  });
});