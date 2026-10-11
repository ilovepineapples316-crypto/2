const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",()=>{
        btn.classList.add("hide")
    })
})