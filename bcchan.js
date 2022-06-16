//ASSIGNING COLOR VALUES(COLOR ARRAYS)
let colors=['blue', 'red', 'green', 'yellow', 'purple'];

//DOM (GETTING BUTTON)
let button= document.getElementById('button');

//ADD EVENTLISTENER 
button.addEventListener('click',function(){

    //RANDOMIZER
     var randomColor = colors[Math.floor(Math.random()* colors.length)]

    //GET CONTAINER
     let container=document.getElementById('container');

    container.style.background =randomColor;

})