const button = document.getElementById("toggle-button");

button.addEventListener("click", () =>{
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        button.innerText = "Toggle Light Mode"
    }
    else{
        button.innerText = "Toggle Dark Mode"
    }
})