const createDomElement = (elType, attributes, textContent) => {
    const el = document.createElement(elType);
    attributes.forEach((att) => {
        el.setAttribute(att.name, att.value);
    });
    if (textContent) {
        el.textContent = textContent;
    }
    return el;
};

export const initializeNotesApp = () => {
    document.getElementById('notesCard').addEventListener('dblclick', function() {
        const notesModal = document.getElementById('notesModal');
        const contentWrapper = notesModal.querySelector('.content-wrapper');
    
        contentWrapper.innerHTML = '';
    
        const heading = createDomElement('h2', [], 'Task Tracker App');
    
        const inputContainer = createDomElement('div', [{ name: 'id', value: 'inputContainer' }]);
        
        const taskInput = createDomElement('input', [
            { name: 'type', value: 'text' },
            { name: 'id', value: 'taskInput' },
            { name: 'placeholder', value: 'Add a new task' }
        ]);
        
        const addTaskBtn = createDomElement('button', [{ name: 'id', value: 'addTaskBtn' }], 'Add Task');
    
        inputContainer.appendChild(taskInput);
        inputContainer.appendChild(addTaskBtn);
    
        const tasksList = createDomElement('ul', [{ name: 'id', value: 'tasksList' }]);
    
        contentWrapper.appendChild(heading);
        contentWrapper.appendChild(inputContainer);
        contentWrapper.appendChild(tasksList);
    
        addTaskBtn.addEventListener('click', () => addTask(taskInput.value));

        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask(taskInput.value);
            }
        });
    
        function addTask(task) {
            if (task.trim() === '') return; 
    
            const li = createDomElement('li', []);
            const taskContent = createDomElement('span', [], task);
    
            const removeButton = createDomElement('button', [{ name: 'class', value: 'removeTask' }], 'Remove');
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
    
            tasksList.insertBefore(li, tasksList.firstChild); // Insert at the top
            taskInput.value = '';
        }
    
        notesModal.showModal();
    });
    
    document.getElementById('closeNotesModal').addEventListener('click', function() {
        document.getElementById('notesModal').close();
    });
};

// Additional code to add event listeners for other icons and menu items

document.getElementById('weatherCard').addEventListener('dblclick', function() {
    document.getElementById('weatherModal').showModal();
    initializeWeatherApp(); 
});

document.getElementById('closeWeatherModal').addEventListener('click', function() {
    document.getElementById('weatherModal').close();
});

document.getElementById('calculatorCard').addEventListener('dblclick', function() {
    document.getElementById('calculatorModal').showModal();
    initializeCalculator(); 
});

document.getElementById('closeCalculatorModal').addEventListener('click', function() {
    document.getElementById('calculatorModal').close();
});

document.getElementById('startButton').addEventListener('click', function() {
    const startMenu = document.getElementById('startMenu');
    toggleStartMenu(startMenu);
});
