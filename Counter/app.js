// Variables
let count = 0;

const counter = document.querySelector("#counter");
const btnList = document.querySelectorAll(".btn");

// Event Handlers

btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("decrease")) {
      count--;
    } else if (btn.classList.contains("increase")) {
      count++;
    } else {
      counter = 0;
    }
    counter.textContent = count;
    if(count<0){
        counter.style.color="red"
    }
    else if(count>0)
    {
        counter.style.color="green"   
    }
    else{
        counter.style.color="black" 
    }
  });
});
