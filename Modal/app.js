// Variables
const openButton=document.querySelector(".open-btn")
const inbox=document.querySelector(".inbox-default")
const closeBtn=document.querySelector("#close-btn")
const overlayDiv=document.querySelector(".overlay")
// 





// 

openButton.addEventListener("click",function(){
    inbox.classList.replace("inbox-default","inner-window")
    document.body.style.backgroundColor="yellow"
    overlayDiv.classList.add("screen-overlay")
})

closeBtn.addEventListener("click",function(){
    inbox.classList.replace("inner-window","inbox-default")
    overlayDiv.classList.remove("screen-overlay")
})
