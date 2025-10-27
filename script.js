// JavaScript source code
// Получение элементов
const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescriptionInput = document.getElementById('taskDescription');
const tasksContainer = document.getElementById('tasksContainer');

// Обработчик отправки формы
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    if (title === '') {
        alert('Пожалуйста, введите название задачи.');
        return;
    }

    // Создание карточки задачи
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    // Название
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task-title';
    taskTitle.textContent = title;

    // Описание, если есть
    const taskDesc = document.createElement('div');
    taskDesc.className = 'task-description';
    taskDesc.textContent = description || '';

    // Кнопка "Удалить"
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить';

    // Обработчик удаления
    deleteBtn.addEventListener('click', () => {
        tasksContainer.removeChild(taskCard);
    });

    // Собираем карточку
    taskCard.appendChild(taskTitle);
    if (description) {
        taskCard.appendChild(taskDesc);
    }
    taskCard.appendChild(deleteBtn);

    // Добавляем в контейнер
    tasksContainer.appendChild(taskCard);

    // Очистка формы
    taskForm.reset();
});