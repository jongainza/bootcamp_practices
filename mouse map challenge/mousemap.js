/*function upDateColor (Event){
  
    document.style.color='rgb((e.pageX*255)/window.innerWidth,0,(e.pageY*255)/window.innerHight)'

}
document.addEventListener('mousemove',upDateColor(Event))*/
document.addEventListener('mousemove',function(e){
    const r = Math.round((e.pageX*255)/window.innerWidth);
    const b = Math.round((e.pageY*255)/window.innerHeight);
    document.body.style.backgroundColor= `rgb(${r},0,${b})`
})

