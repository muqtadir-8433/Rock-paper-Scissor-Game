//Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again

let modeBtn = document.querySelector("#mode");
let currMode = "Light";   //dark

modeBtn.addEventListener("click", () =>{
    if (currMode == "Light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    
    console.log(currMode);
}); 