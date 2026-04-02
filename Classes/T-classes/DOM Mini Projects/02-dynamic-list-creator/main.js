const input = document.getElementById("itemInput");
const addbtn = document.getElementById("addBtn");
const list = document.getElementById("list");


addbtn.addEventListener("click", () =>{
    if(input.value == ""){
        alert("Mat kar lala !")
        return;
    }
    const li = document.createElement("li");
    const delBtn = document.createElement("button")

    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    li.textContent = input.value;

    delBtn.addEventListener("click", ()=>{
        li.remove();
    })

    


    li.appendChild(delBtn);
    list.appendChild(li)


    input.value = "";

    
})