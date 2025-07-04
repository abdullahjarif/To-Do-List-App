const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function addTask() {

    if (inputBox.value.trim() === '') {

        alert("You must add a task!");

    } 
    else {
        let li = document.createElement("li");

        li.textContent = inputBox.value; 

        listContainer.appendChild(li);  

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";

        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(ch){
    if(ch.target.tagName === "LI"){
        ch.target.classList.toggle("checked");
        saveData()
    }

    else if(ch.target.tagName === "SPAN"){
        ch.target.parentElement.remove();
        saveData()
    }
}, false);

// store data in local storage of browser 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
// show task after storage 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()



