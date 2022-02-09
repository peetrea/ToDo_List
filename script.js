let tasks = []
let task = ""
let editingId = -1

function setValue(){
    task = document.getElementById("myInput").value
}

function newElement(){
    tasks.push(task)
    drawList()
    console.log(tasks)
    document.getElementById("myInput").value = ""
}

function editElement(id){
    if (editingId != -1)
        return
    const addButton = document.getElementById("addButton")
    const editButton = document.getElementById("editButton")
    addButton.style.display = "none"
    editButton.style.display = "block"
    document.getElementById("myInput").value = tasks[id]
    task = tasks[id]
    editingId = id
}

function saveElement(){
    const addButton = document.getElementById("addButton")
    const editButton = document.getElementById("editButton")
    if (editingId >= 0 && editingId < tasks.length)
        tasks[editingId] = task
    addButton.style.display = "block"
    editButton.style.display = "none"
    drawList()
    document.getElementById("myInput").value = ""
    editingId = -1
}

function deleteElement(id){
    if (editingId == -1 && id >= 0 && id < tasks.length)
        tasks.splice(id, 1)
}

function drawList(){
    console.log(tasks)
    document.getElementById("tasks").innerHTML = "" 

    // afisaza fiecare task in div id="tasks"
    for(let i = 0; i < tasks.length; i++){
        let div = document.createElement("div")
        div.classList = "task"
        let p = document.createElement("p")
        p.classList = "task_name"
        p.innerHTML = tasks[i]
        div.append(p)
        
        let editButton = document.createElement("button")
        editButton.classList = "edit_button"
        editButton.innerHTML = "edit"
        editButton.onclick = function(){
            editElement(i)
        }
        div.append(editButton)
        let delButton = document.createElement("button")
        delButton.classList = "close_button"
        delButton.innerHTML = " x "
        delButton.onclick = function(){
            if(editingId == -1){
                let div = this.parentElement
                div.style.display = "none"
                console.log(div)
                deleteElement(i)
            }
        }
        div.append(delButton)
        document.getElementById("tasks").append(div)
    }
}