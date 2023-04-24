
    
/*
function validateForm(){
    const valid1=document.querySelector('#top')
    const valid2=document.querySelector('#botton')
    const valid3=document.querySelector('#image')
    if(valid1 ===""){
        alert("Top Text must be filled out!");
    }
    else if(valid2==""){
        alert("Botton Text must be filled out!")
    }
    else if(valid3==""){
        alert("Image should be introduce!")
    }
}*/
const  form = document.querySelector('#memeform');
const sup = document.querySelector('input[name="toptext"]');
const botton = document.querySelector('input[name="bottontext"]');
const image = document.querySelector('input[name="image"]');
const results = document.querySelector ('#results');


form.addEventListener('submit',function(e){
  

    e.preventDefault();
    const newMeme = makeMeme (sup.value,botton.value,image.value);
    results.appendChild(newMeme);
    sup.value = "";
    botton.value = '';
    function makeMeme (toptext,bottontext,image){
    const meme = document.createElement ("div");
    const arriba = document.createElement ('h1');
    const abajo = document.createElement ("h2");
    const foto = document.createElement ("img");

    const arribadiv = document.createElement ('div');
    const abajodiv = document.createElement ("div");
    const fotodiv = document.createElement ("div");

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Meme';
    removeButton.setAttribute('class',"remove");


    arribadiv.setAttribute("class","arr");
    abajodiv.setAttribute('class',"aba");
    fotodiv.setAttribute('class','fot');
    meme.setAttribute("class","container");

    arribadiv.append(arriba);
    abajodiv.append (abajo);
    fotodiv.append (foto);

  
    
    arriba.innerText= toptext;
    abajo.innerText = bottontext;
    foto.setAttribute ("src",image);

    meme.append(arribadiv,abajodiv,fotodiv,removeButton);
    return meme;
    
    removeButton.addEventListener('click',function(e){
        if (e.target.tagName === 'BUTTON'){
            e.target.parentElement.remove();
        }
    })
    

}


    
})



/*const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Meme';
    removeButton.setAttribute('class',"remove");

 meme.addEventListener('click',function(e){
        if (e.target.tagName === 'BUTTON'){
            e.target.parentElement.remove();*/