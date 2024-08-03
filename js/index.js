const inputBox = document.getElementById("user-input");
const itemBox = document.getElementById("item-list");
function addTask(){
    if(inputBox.value == ''){
        alert("You must write someting! ")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        itemBox.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveTask();
}
itemBox.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);
function saveTask(){
    localStorage.setItem("data", itemBox.innerHTML)
}
function showTask(){
    itemBox.innerHTML = localStorage.getItem("data")
}
showTask()