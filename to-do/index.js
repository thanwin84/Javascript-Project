window.addEventListener('load', ()=>{
    const form = document.querySelector('.new-task-form');
    const input = document.querySelector('.new-task-input');
    const listElement = document.querySelector('.tasks');
    
    form.addEventListener('submit', submitTask);
    function submitTask(event){
        event.preventDefault();
        const task = input.value;
        if (!task){
            alert('please fill out the task');
            return;
        }
        // creating task div
        var taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        //creating content div
        var contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        // adding contentdiv to the task div
        taskDiv.appendChild(contentDiv);
       

        // creating input form for the content div
        var taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text')
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly', "readonly");

        //appending input form the content div
        contentDiv.appendChild(taskInputElement);

        // creating div for actions
        var actionDiv = document.createElement('div');
        actionDiv.classList.add('actions');
        //creating edit button
        var editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.appendChild(document.createTextNode('edit'));

        // creating delete button
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.appendChild(document.createTextNode('delete'));

        // appending button one by one to the actions div
        actionDiv.appendChild(editButton);
        actionDiv.appendChild(deleteButton);

        //adding actions form the task div
        taskDiv.appendChild(actionDiv);
        // adding taskDiv to the Tasks container
        listElement.appendChild(taskDiv);

        // edit button
        editButton.addEventListener('click', ()=>{
            if (editButton.innerHTML.toLowerCase() == 'edit'){
                taskInputElement.removeAttribute('readonly');
                taskInputElement.focus();
                editButton.innerText = 'Save';
            }
            else {
                taskInputElement.setAttribute('readonly', 'readonly');
                editButton.innerText = 'edit';
            }
        });

        delete button
        deleteButton.addEventListener('click', (e) => { 
            listElement.removeChild(taskDiv);
            
        });
        

    }
})
