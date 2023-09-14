let search = document.getElementById("search");
let searchbtn = document.getElementById("searchbtn");
let tasklistul = document.getElementsByClassName("task-list-ul")[0];

searchbtn.addEventListener("click",()=>{    
    if(search.value === ""){
        alert("please enter something in search bar")
    }
    else{
        let li = document.createElement("li");
        li.classList.add("task-list-li");
        li.innerHTML = `${search.value}`;
        tasklistul.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = `\u00d7`;
        li.appendChild(span)
    }
    saveData();
})  


tasklistul.addEventListener("click",(e)=>{    
    if(e.target.tagName === "LI"  && e.target.classList[1]!="checked"){
        e.target.classList.toggle("checked");
        e.target.classList.add("checkedimg");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",tasklistul.innerHTML)
}

function showtask(){
    tasklistul.innerHTML = localStorage.getItem("data");
}
showtask();