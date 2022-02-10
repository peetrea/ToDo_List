let tasks = []
let task = ""
let editingId = -1 //id-ul elementului care se editeaza

function setValue(){
    task = document.getElementById("myInput").value
}

function newElement(){
    tasks.push(task)
    drawList()
    document.getElementById("myInput").value = ""
}

function editElement(id){
    //daca editingId este -1 => nu se editeaza nici un element 
    //la momentul apelarii functiei
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
    if (editingId >= 0 && editingId < tasks.length){
        const addButton = document.getElementById("addButton")
        const editButton = document.getElementById("editButton")
        tasks[editingId] = task
        addButton.style.display = "block"
        editButton.style.display = "none"
        drawList()
        document.getElementById("myInput").value = ""
        editingId = -1
    }
}

function deleteElement(id){
    if (editingId != -1)
        return
    tasks.splice(id, 1)
    drawList()
}

function drawList(){
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
            deleteElement(i)
        }
        div.append(delButton)
        document.getElementById("tasks").append(div)
    }
}