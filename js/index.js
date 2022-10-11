const bubble = document.querySelectorAll(".bubble")
const bubblebtn = document.querySelector(".bubble")
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
const ul = document.querySelector(".list-unstyled")
const li = document.createElement("li")
const checkbox = document.querySelector('input[type="checkbox"]')
const progress = document.querySelector('.progress-bar')
const wallpapers = "/src/Wallpaper/"

const montain = document.querySelector('#Montain')
const montain2 = document.querySelector('#Montain2')
const forest = document.querySelector('#Forest')

// const checked = document.querySelectorAll('input[type="checkbox"]:checked')

let checked2 =[0];
const add = function (){
    if(input.value !== ""){

        task = `<label class="containerMark">       
        <input type="checkbox" class="checkmark">
        <span>${input.value}</span>
        </label>`

    ul.innerHTML += `<li>${task}</li>`
    input.value = ""
    checked2 ++
    document.querySelector('.progress-bar').style.width = checked2 + "%"// progressbar
} else {
    alert("Seems like you have done all")  //alert on no input
}

}

console.log(progress)

submit.addEventListener("click",add)

// WALLPAPER
const changeWallpaper = ()=>{
if(bubble[0]){
    document.body.style.backgroundImage = "url('/src/Wallpaper/Montain.jpg')";
    document.body.style.filter = "grayscale(100%)"
    console.log("Hello")
} else if(bubble[1]){
    document.body.style.backgroundImage = "url('/src/Wallpaper/Montain2.jpg')";
    document.body.style.filter = "grayscale(100%)"
    console.log("Hello")
}
}


bubble[0].addEventListener("click",()=> document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain.jpg')")
bubble[1].addEventListener("click",()=> document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain_2.jpg')")
bubble[2].addEventListener("click",()=> document.body.style.backgroundImage = "url('\/src/Wallpaper/Forest.jpg')")

// bubble.addEventListener("click",changeWallpaper)
//WALLPAPER END

// CHECKBOX COUNTER


// console.log(checkbox)
//  checkbox.addEventListener('change', console.log(checked.length))

