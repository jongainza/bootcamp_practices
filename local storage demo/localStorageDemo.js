const swit = document.querySelector('input[type="checkbox"]');

swit.addEventListener("click",function(e){
    document.body.className = swit.checked? "dark" : ""
})