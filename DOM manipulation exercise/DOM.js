function makeBody (color){
    document.body.style.backgroundColor = color;
}
const teal = document.querySelector ('#teal');
teal.ondblclick = function(){
    makeBody('purple')
}
const violet = document.querySelector('#violet')
violet.addEventListener('mouseover',function(){
    makeBody('violet')
})