const bubble = document.querySelectorAll(".bubble")
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
let tasks = 0;

const checkbox = document.querySelector('input[type="checkbox"]')
const progress = document.querySelector('.progress-bar')
// WALLPAPER BUBBLES
const montain = document.querySelector('#Montain')
const montain2 = document.querySelector('#Montain2')
const forest = document.querySelector('#Forest')
//CREATE ELEMENTS
// const li = document.createElement("li")
const label = document.createElement("label")
const checkmark = document.createElement("input")
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


// ADDING li with Inputed Task to ul
const ul = document.querySelector(".list-unstyled")
const handleCLick = () => {

    //Creates the list item with the tasks value 
    const li = document.createElement("li")
    const task = document.createElement("input")
    task.value = `${input.value}`
    task.disabled = true
    task.className = "Tasks2"
    // creates the edit button 
    const edit = document.createElement("button")
    edit.innerText = "edit"
    //creates 
    const del = document.createElement("button")
    del.innerText = "del"

  ul.appendChild(li).appendChild(task)
  li.appendChild(edit)
  li.appendChild(del)
  tasks = document.querySelectorAll(".Tasks2")
  input.value = ""
//   listen = tasks.addEventListener("click",edit)

};

submit.addEventListener('click', handleCLick)




// ADDING THE TASK + CHECKBOX
// let checked2 = [0];
// const add = function () {


//     if (input.value !== "" && input.value !== " ") {
//         ul.innerHTML += `<label class="containerMark">       
//         <li class="task"><input type="checkbox" class="checkmark">
//             ${input.value}</li>
//              </label>`
//         input.value = ""
//         checked2++
//         document.querySelector('.progress-bar').style.width = checked2 + "%"// progressbar



//     } else {
//         alert("Seems like you have done all")  //alert on no input
//     }
// }

//SUBMIT ON ENTER KEY PRESS
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13 || event.keyCode === 32) {
        submit.click();
    }
});


// DELETE
function Remove() {
    ul.removeChild(li)
}

// EDIT
function edit (e){
    
    tasks[e].disabled = false
    console.log("hello")
}
//COUNT CHECKED BOXES DISPLAY IN PROGRESS


// submit.addEventListener("click", add)


let listen = null;
bubble[0].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain.jpg')")
bubble[1].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain_2.jpg')")
bubble[2].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Forest.jpg')")