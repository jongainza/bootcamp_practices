
const ul = document.querySelector('ul');
const ne = document.querySelector ("#new");
const td = []
const button = document.querySelector('#submit')
button.addEventListener("click",function(e){
    let task =  document.querySelector ('#todo');
    e.preventDefault();
    const li = document.createElement('li');
    li.setAttribute('class',"completed");
    li.setAttribute('class',"todo");
    const text = task.value
    console.log(text)
    li.innerText = text;
    td.push(text)
    let output = JSON.stringify(td)
    localStorage.setItem('todo', output)
    task.value = "";
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Task';
    removeButton.setAttribute('class',"remove")
   /* removeButton.addEventListener('click',function(e){
        e.target.parentElement.remove()
    })*/
    li.appendChild(removeButton);
    const done = document.createElement('input');
    done.setAttribute('type','checkbox');
    done.setAttribute('id','done');
    
    li.prepend(done);
    ul.appendChild(li)
    localStorage.setItem('todo', JSON.stringify(td))

  //  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  //  toggleSwitch.addEventListener('click',function(e){
  //      console.log(toggleSwitch.checked)
  //  }) 
})//
// ne.addEventListener("submit",function(e){
  

    const toggleSwitch = document.querySelector('input[type="checkbox"]');
toggleSwitch.addEventListener('click',function(e){
    console.log(toggleSwitch.checked)
})
// })

ul.addEventListener('click',function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})


  
ul.addEventListener ('click', function(e){
  const ev = document.querySelector('.todo')
    if (e.target.tagName === "INPUT"){
       // if (input #done checked===)
        e.target.parentElement.setAttribute("class","completed");
     //  ev.classList.add('completed')
     //  ev.classList.toggle('completed')
    }
   
   
})


    /* Don't know how to uncheck the checkbox once is checked.
       Also i dont know how to storege the todos in local*/