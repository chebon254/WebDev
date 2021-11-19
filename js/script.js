//Create A Responsive Menu Hide Show Side Menu
const menu = document.querySelector(".links");
const menuBtn = document.querySelector(".menu-bar");
const cancelBtn = document.querySelector(".cancel-btn");

// Onclick For Menu Bar
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menu.classList.remove("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.add("hide");
    menu.classList.remove("active");
}
