let search = document.getElementById("search");
let searchbtn = document.getElementById("searchbtn");


searchbtn.addEventListener("click",()=>{    
    let li = document.createElement("li");
    li.getAttribute(".task-list-li")
    li.innerHTML = `${search.value}`
    const tasklistul = document.getElementsByClassName("task-list-ul");
    tasklistul[0].appendChild(li);
})  