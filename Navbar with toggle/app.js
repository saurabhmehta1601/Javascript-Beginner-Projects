const burger=document.querySelector(".burger")
const navLinks=document.querySelector(".nav-links")
burger.addEventListener("click",()=>{
    burger.classList.toggle("rotated-burger")
    navLinks.classList.toggle("nav-links-active")
})