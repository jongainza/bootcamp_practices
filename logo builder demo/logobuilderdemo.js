const form = document.querySelector('#logoform');
const brandinput = document.querySelector('input[name="brandname"]');
const colorinput = document.querySelector('input[name="color"]');
const fontsizeinput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const newLogo = makeLogo(brandinput.value, colorinput.value , fontsizeinput.value);
    results.appendChild(newLogo);
});



function makeLogo (text, color, size){
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = `${size}px`;
    return logo; 

}