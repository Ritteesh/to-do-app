// Get elements
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add new task function
function addTask() {
    const taskText = todoInput.value.trim();
    
    if (taskText !== '') {
        // Create list item
        const listItem = document.createElement('li');
        
        // Create text node
        const taskNode = document.createTextNode(taskText);
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            listItem.remove();
        };

        // Append task text and delete button to list item
        listItem.appendChild(taskNode);
        listItem.appendChild(deleteBtn);
        
        // Append list item to list
        todoList.appendChild(listItem);
        
        // Clear input
        todoInput.value = '';
    }
}

// Event listener for add button
addBtn.addEventListener('click', addTask);

// Allow pressing 'Enter' to add tasks
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});