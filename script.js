var button =document.createElement("button")
button.innerText= `
CLICK ME HOVHANNES
`
    var h1 = document.querySelector("h1")
button.addEventListener("click",()=>{
    h1.style.opacity="1"
})
document.body.appendChild(button)
