const taskInput = document.getElementById('taskInput');
const newTaskBtn = document.getElementById('newTask');
const taskList = document.querySelector('.task_list');

let taskBeingEdited = null; 

newTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    if (taskBeingEdited) {
        updateTask(taskBeingEdited, taskText);
        taskBeingEdited = null;
        newTaskBtn.textContent = '+';
    } else {
        addTask(taskText);
    }

    taskInput.value = '';
});

function addTask(text) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    taskSpan.className = 'task-text';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = 'line-through';
            taskSpan.style.opacity = 0.6;
        } else {
            taskSpan.style.textDecoration = 'none';
            taskSpan.style.opacity = 1;
        }
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊️';
    
    editBtn.addEventListener('click', () => {
        taskInput.value = taskSpan.textContent;
        taskBeingEdited = li;
        newTaskBtn.textContent = '✔️';
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
         
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        if (taskBeingEdited === li) {
            taskBeingEdited = null;
            newTaskBtn.textContent = '+';
            taskInput.value = '';
        }
    });

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(buttonGroup);
    taskList.appendChild(li);
}

function updateTask(li, newText) {
    const taskSpan = li.querySelector('.task-text');
    taskSpan.textContent = newText;
}



// let taskInput=document.querySelector("#taskInput");
// let newTask=document.querySelector("#newTask");
// let task_list=document.querySelector(".task_list");

// newTask.addEventListener("click",(e)=>{
//     e.preventDefault();
//       let content=taskInput.value.trim();
//       if(content===" ") return;
//       let li=document.createElement("li");
//       li.textContent=content;
//       task_list.appendChild(li);
//       taskInput.value="";


//       let delete_btn=document.createElement("button");
//       delete_btn.innerHTML=`<i class="fa-solid fa-trash"></i>`
//       delete_btn.addEventListener("click",()=>{
//         task_list.removeChild(li);
//       })
//       li.appendChild(delete_btn);


//       let update_btn=document.createElement("button");
//       update_btn.innerHTML=`<i class="fa-solid fa-pen"></i>`
       
//       let span =document.createElement("span");
//       span.textContent=content;
//       update_btn.addEventListener("click",()=>{
//          taskInput.value=tasks
//       })
// })


