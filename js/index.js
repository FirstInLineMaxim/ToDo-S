const bubble = document.querySelector(".bubble")
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
const ul = document.querySelector(".list-unstyled")
const li = document.createElement("li")
const task = document.createTextNode("test")


li.appendChild(task);

const add = function (){
    ul.appendChild(li)

}

submit.addEventListener("click",add)

// WALLPAPER
const changeWallpaper = ()=>{
    document.body.style.backgroundImage = "url('/src/Wallpaper/Montain.jpg')";
    console.log("Hello")
}

bubble.addEventListener("click",changeWallpaper)
//WALLPAPER END

