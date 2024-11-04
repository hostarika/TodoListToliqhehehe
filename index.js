const darkBtn=document.getElementById("dark-btn");
const sun=document.getElementById("sun");
const moon=document.getElementById("moon");
const send=document.getElementById("add-btn");
const inputText=document.getElementById("input-text");
const todoList=document.getElementById("todo-list");

let todolar=(localStorage.getItem("todos")||"").split(",");
console.log(todolar);

    todoList.innerHTML="";
    if(todolar.length==1 && todolar[0]==""){
     todolar.pop();
     localStorage.setItem("todos",todolar)
    
}
todoView(todolar)
function todoView(ishlar) {
   todoList.innerHTML=""
    for (let i = 0; i < ishlar.length; i++) {
        const li =document.createElement("li");
       li.innerHTML=`
               <div>
                <input type="checkbox" id="check" onClick="completed(this)">
                <h2 class="todo-text">${todolar[i]}</h2>
               </div>
                <div class="btn-box">
                    <button class="change-btn" id="change-btn" onClick="editTodo(this)"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-btn" id="delete-btn" onClick="deleteTodo(this)"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;




    todoList.appendChild(li);
    inputText.value="";

        
    }
}



darkBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.length>0){
         sun.style.display="block";  
         moon.style.display="none";  
    }else{
        sun.style.display="none";  
        moon.style.display="block"; 
    } 
})


send.addEventListener("click",()=>{
    if(inputText.value.trim().length<1){
        alert("Write something !!");
    }else{
         todolar.push(inputText.value);
         localStorage.setItem("todos",todolar);
         inputText.value="";
         todoView(todolar);


    }
})

function deleteTodo(e){
    let yozuv=e.parentNode.parentNode.children[0].children[1].textContent;
    let todolar2 = todolar.filter((e,i)=> e!=yozuv);
    localStorage.setItem("todos", todolar2);
    todolar=todolar2;
    todoView(todolar2);
}


function editTodo(e) {   
    let yozuv=e.parentNode.parentNode.children[0].children[1].textContent;
    let todolar2 = todolar.filter((e,i)=> e!=yozuv);
    localStorage.setItem("todos", todolar2);
    todolar=todolar2;
    todoView(todolar2);
    inputText.value = yozuv;
}

function completed(e) {
    if (e.checked==true) {
        e.parentNode.children[1].classList.add("check")
        
    }else{
        e.parentNode.children[1].classList.remove("check")
    }
    
}





