const bubble = document.querySelectorAll(".bubble")
// const bubblebtn = document.querySelector(".bubble")
const task = document.querySelector(".task") || [0];
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
const ul = document.querySelector(".list-unstyled")
const li = document.createElement("li")
const label = document.createElement("label")
const checkmark = document.createElement("input")
const checkbox = document.querySelector('input[type="checkbox"]')
const progress = document.querySelector('.progress-bar')
// WALLPAPER BUBBLES
const montain = document.querySelector('#Montain')
const montain2 = document.querySelector('#Montain2')
const forest = document.querySelector('#Forest')

// const checked = document.querySelectorAll('input[type="checkbox"]:checked')



// let checked2 = [0];
// const add = function () {
//     if (input.value !== "") {

    //     task = `<label class="containerMark">       
    //     <input type="checkbox" class="checkmark">
    //     ${input.value}
    //     </label>
    //     <button onclick="Remove()">Click me to remove this </button>`

    //     ul.innerHTML += `<li>${task}</li>`
    //     input.value = ""
    //     checked2++
    //     document.querySelector('.progress-bar').style.width = checked2 + "%"// progressbar
    // } else {
    //     alert("Seems like you have done all")  //alert on no input
    // }

// }


// ADDING THE TASK + CHECKBOX
let checked2 = [0];
const add = function (){
    if (input.value !==""){
        ul.innerHTML += `<li class="task">${input.value}</li>`
        input.value = ""
        checked2++
        document.querySelector('.progress-bar').style.width = checked2 + "%"// progressbar
    } else {
        alert("Seems like you have done all")  //alert on no input
    }
}

//SUBMIT ON ENTER KEY PRESS
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit.click();
    }
});


// DELETE
function Remove (){
    ul.removeChild(li)
}

// EDIT

//COUNT CHECKED BOXES DISPLAY IN PROGRESS


submit.addEventListener("click", add)
bubble[0].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain.jpg')")
bubble[1].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain_2.jpg')")
bubble[2].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Forest.jpg')")

