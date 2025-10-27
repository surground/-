const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescriptionInput = document.getElementById('taskDescription');
const tasksContainer = document.getElementById('tasksContainer');

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    if (title === '') {
        alert('Пожалуйста, введите название задачи.');
        return;
    }

    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task-title';
    taskTitle.textContent = title;

    const taskDesc = document.createElement('div');
    taskDesc.className = 'task-description';
    taskDesc.textContent = description || '';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить';

    deleteBtn.addEventListener('click', () => {
        tasksContainer.removeChild(taskCard);
    });

    taskCard.appendChild(taskTitle);
    if (description) {
        taskCard.appendChild(taskDesc);
    }
    taskCard.appendChild(deleteBtn);

    tasksContainer.appendChild(taskCard);

    taskForm.reset();

});
