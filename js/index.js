const bubble = document.querySelector(".bubble")
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
const ul = document.querySelector(".list-unstyled")
const li = document.createElement("li")
const checkbox = document.querySelector('input[type="checkbox"]')
const progress = document.querySelector('.progress-bar')
// const checked = document.querySelectorAll('input[type="checkbox"]:checked')
let checked2 =[0];
// const task = [];
const add = function (){
    if(input.value !== ""){
        task = `<label class="containerMark">
        <input type="checkbox" class="checkmark">
        <span>${input.value}</span>
        </label>`
    ul.innerHTML += `<li>${task}</li>`
    input.value = ""
    checked2 ++
    console.log(checked2)
    document.querySelector('.progress-bar').style.width = checked2 + "%"// progressbar
} else {
    alert("Seems like you have done all")  //alert on no input
}

}

console.log(progress)

submit.addEventListener("click",add)

// WALLPAPER
const changeWallpaper = ()=>{
    document.body.style.backgroundImage = "url('/src/Wallpaper/Montain.jpg')";
    console.log("Hello")
}

bubble.addEventListener("click",changeWallpaper)
//WALLPAPER END

// CHECKBOX COUNTER


// console.log(checkbox)
//  checkbox.addEventListener('change', console.log(checked.length))

