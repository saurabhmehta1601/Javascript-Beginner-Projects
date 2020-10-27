const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn=document.querySelector(".btn a")

const colorName=document.querySelector("#color-name")

btn.addEventListener("click",function(){
    backcolor=getRandomColor()
    document.body.style.backgroundColor=backcolor
    colorName.innerText=backcolor
})

function getRandomColor(){
    color="#"
    for(let i=0;i<6;i++)
    {
       color+=hex[Math.floor(Math.random()*hex.length)]
    }
    return color
}
