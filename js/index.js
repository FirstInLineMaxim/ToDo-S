const bubble = document.querySelector(".bubble")
const input = document.querySelector("#taskInput")


const changeWallpaper = ()=>{
    document.body.style.backgroundImage = "url('/src/Wallpaper/Montain.jpg')";
    console.log("Hello")
}


bubble.addEventListener("click",changeWallpaper)


