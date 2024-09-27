function addTask() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const locationInput = document.getElementById('location-input');
    const importanceSelect = document.getElementById('importance-select');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '' && dateInput.value !== '' && locationInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.className = importanceSelect.value;

        // Create the task content with date, location, edit and delete buttons
        li.innerHTML = `
          <span class="task-text">${taskInput.value}</span> 
          - <strong class="task-date">${dateInput.value}</strong> 
          - <span class="task-location">${locationInput.value}</span>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>`;

        // Add delete functionality to the delete button
        li.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(li);
        });

                // Add edit functionality to the edit button
                li.querySelector('.edit-btn').addEventListener('click', function() {
                    editTask(li);
                });

                taskList.appendChild(li);
                taskInput.value = '';
                dateInput.value = '';
                locationInput.value = '';
            } else {
                alert('Please enter a task, date, and location');
            }
        }

        // Function to edit a task
        function editTask(taskItem) {
            const taskText = taskItem.querySelector('.task-text').textContent;
            const taskDate = taskItem.querySelector('.task-date').textContent;
            const taskLocation = taskItem.querySelector('.task-location').textContent;

            document.getElementById('task-input').value = taskText;
            document.getElementById('date-input').value = taskDate;
            document.getElementById('location-input').value = taskLocation;

            taskItem.remove();
        }
       
       
        document.getElementById('add-task-btn').addEventListener('click', addTask)
