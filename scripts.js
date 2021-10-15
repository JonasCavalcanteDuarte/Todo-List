let inputTask = document.getElementById("input-task")
let button = document.getElementById("add-button")
let taskTitle = document.getElementById("task-title")
let completeList = document.getElementById("task-list")
let arrayTasks = []
reloadTasks()

function showTasks() {
    let newLi = ''
    arrayTasks.forEach((task, index) => {
        newLi = newLi + `<li class="task ${ task.itsDone == true  && 'complete'}">
                            <button class="rocket-button" onClick="completeTask(${index})">
                                <i class="fas fa-rocket"></i>
                            </button>
                                <p id="task-title"  ${ task.itsDone == true  && 'class="complete"'}>${task.taskTitle}</p>
                            <button class="trash-button" onClick="deleteTask(${index})">
                                <i class="fas fa-trash"></i>
                            </button>
                         </li>`
    });
    completeList.innerHTML = newLi

    localStorage.setItem("listOfTasks",JSON.stringify(arrayTasks))
}

function addTask() {
    arrayTasks.push({
        taskTitle:inputTask.value,
        itsDone:false
    })

    showTasks()
    console.log("Tarefas adicionadas na lista")
}

function deleteTask(index) {
    arrayTasks.splice(index, 1)
    showTasks()
    console.log("Tarefa " + index + " deletada")
}

function completeTask(index){
    arrayTasks[index].itsDone = !arrayTasks[index].itsDone
    showTasks()
    console.log("Tarefa " + index + " deletada")
}

function reloadTasks(){
    let myTasks = localStorage.getItem("listOfTasks")

    arrayTasks = JSON.parse(myTasks)
    showTasks()
    console.log("Lista de tarefas recuperadas do Local Storage")
}

button.addEventListener("click", addTask)