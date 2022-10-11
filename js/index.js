const bubble = document.querySelector(".bubble")
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
const li = document.createElement("li")
const task = document.createTextNode("test")


li.appendChild(task);




// WALLPAPER
const changeWallpaper = ()=>{
    document.body.style.backgroundImage = "url('/src/Wallpaper/Montain.jpg')";
    console.log("Hello")
}

bubble.addEventListener("click",changeWallpaper)
//WALLPAPER END

