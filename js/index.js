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


// ADDING li with Inputed Task to ul
const ul = document.querySelector(".list-unstyled")
const handleCLick = () => {

    //Creates the list item with the tasks value 
    const li = document.createElement("li")
    const task = document.createElement("textarea")
    task.value = `${input.value}`
    task.disabled = true
    task.className = "Tasks2"

    // creates the edit button 
    const edit = document.createElement("button")
    edit.innerText = "edit"
    edit.className = "edit"

    //creates 
    const del = document.createElement("button")
    del.innerText = "del"
    del.className = "del"


  ul.appendChild(li).appendChild(task)
  li.appendChild(edit)
  li.appendChild(del)
  input.value = ""

};

const taskList = document.querySelector(".list-unstyled") // 
taskList.addEventListener("click",function(e){
        //checks if uelement in ul is with class edit.
    if (e.target.className === "edit"){
        edit(e.target.previousSibling)
        return 
    } 
    //checks if element in ul is with class save.
    if (e.target.className === "save"){
        edit(e.target.previousSibling)
        return
    }   
    //checks if uelement un ul is with class del.
    if (e.target.className === "del"){
        Remove(e.target.parentElement)
        return
    }
    //checks if uelement un ul is with class Task2.
    // if(e.target.className === Task2){
    //     //change class to something flex and bigger for conntent 
    // }
})


// (e) => 
// (e.target.className === "edit" && "save") ? edit(e.target.previousSibling) : console.log(e.target))





//SUBMIT ON ENTER KEY PRESS
submit.addEventListener('click', handleCLick)
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit.click();
    }
});


// DELETE
function Remove(selectedLi) {
    ul.removeChild(selectedLi)
}

// EDIT
function edit (selectedInput){
    if (selectedInput.disabled === true){
        selectedInput.disabled = false;
        //CHANGE PENCIL TO SAVE
        selectedInput.nextSibling.className = "save"

    } else {selectedInput.disabled = true
        selectedInput.nextSibling.className = "edit"}

}
//COUNT CHECKED BOXES DISPLAY IN PROGRESS


bubble[0].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain.jpg')")
bubble[1].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain_2.jpg')")
bubble[2].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Forest.jpg')")

































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