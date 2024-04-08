

export const initializeNotesApp = () => {
    document.getElementById('notesCard').addEventListener('dblclick', function() {
        const notesModal = document.getElementById('notesModal');
        const contentWrapper = notesModal.querySelector('.content-wrapper');
    
        contentWrapper.innerHTML = '';
    
        const heading = document.createElement('h2');
        heading.textContent = 'Task Tracker App';
    
        const inputContainer = document.createElement('div');
        inputContainer.setAttribute('id', 'inputContainer');
        
        const taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'text');
        taskInput.setAttribute('id', 'taskInput');
        taskInput.setAttribute('placeholder', 'Add a new task');
        
        const addTaskBtn = document.createElement('button');
        addTaskBtn.setAttribute('id', 'addTaskBtn');
        addTaskBtn.textContent = 'Add Task';
    
        inputContainer.appendChild(taskInput);
        inputContainer.appendChild(addTaskBtn);
    
        const tasksList = document.createElement('ul');
        tasksList.setAttribute('id', 'tasksList');
    
        contentWrapper.appendChild(heading);
        contentWrapper.appendChild(inputContainer);
        contentWrapper.appendChild(tasksList);
    
        addTaskBtn.addEventListener('click', addTask);
    
        function addTask() {
            if (taskInput.value.trim() === '') return; 
    
            const li = document.createElement('li');
            const taskContent = document.createElement('span');
            taskContent.textContent = taskInput.value;
    
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'removeTask';
            removeButton.onclick = function() {
                tasksList.removeChild(li);
            };
    
            li.appendChild(taskContent);
            li.appendChild(removeButton);
    
            li.addEventListener('click', function(event) {
                if (event.target !== removeButton) {
                    this.classList.toggle('completed');
                }
            });
    
            tasksList.appendChild(li);
            taskInput.value = '';
        }
    
        notesModal.showModal();
    });
    
    document.getElementById('notesCard').addEventListener('dblclick', function() {
        document.getElementById('notesModal').showModal();
    });
    
    document.getElementById('closeNotesModal').addEventListener('click', function() {
        document.getElementById('notesModal').close();
    });
    
}