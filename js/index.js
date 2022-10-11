const bubble = document.querySelector(".bubble")
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
const ul = document.querySelector(".list-unstyled")
const li = document.createElement("li")
// const task = [];
let checkbox ;
console.log(task)
const add = function (){
    if(input.value !== ""){
        task.push(input.value)
        checkbox = `<label class="">
        <input type="checkbox" checked="checked">
        <span class="checkmark">${input.value}</span>
        </label>`
    ul.innerHTML += `<li>${checkbox}</li>`
    input.value = ""
} else {
    alert("Seems like you have done all")  //alert on no input
}

}

submit.addEventListener("click",add)

// WALLPAPER
const changeWallpaper = ()=>{
    document.body.style.backgroundImage = "url('/src/Wallpaper/Montain.jpg')";
    console.log("Hello")
}

bubble.addEventListener("click",changeWallpaper)
//WALLPAPER END

