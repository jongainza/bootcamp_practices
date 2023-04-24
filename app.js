const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#frien-list')



for (let btn of removeButtons){
    btn.addEventListener('click',function(e){
       e.target.parentElement.remove()
    })
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = input.value;
    input.value= "";
    friendList.append(newLi);
    const button = document.createElement('button')
    button.innerText ='Unfriend';
    newLi.appendChild(button);
    button.addEventListener('click',function(e){
        e.target.parentElement.remove();
    })



})

