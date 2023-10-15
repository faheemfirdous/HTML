// audio variables
var crash = new Audio("sounds\\crash.mp3");
var kick = new Audio("sounds\\kick-bass.mp3");
var snare = new Audio("sounds\\snare.mp3");
var tom1 = new Audio("sounds\\tom-1.mp3");
var tom2 = new Audio("sounds\\tom-2.mp3");
var tom3 = new Audio("sounds\\tom-3.mp3");
var tom4 = new Audio("sounds\\tom-4.mp3");

// keypress detecting

for(var i = 0;i < document.querySelectorAll('.drum').length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    });
    
}
document.addEventListener("keypress", function (event){   
    makeSound(event.key);
    buttonAnimation(event.key);
});


// sound function

function makeSound(key)
{
    switch(key)
        {
            case "w":
                crash.play();
            break;
            case "a":
                kick.play();
            break;
            case "s":
                snare.play();
            break;
            case "d":
                tom1.play();
            break;
            case "j":
                tom2.play();
            break;
            case "k":
                tom3.play();
            break;
            case "l":
                tom4.play();
            break;
            default:
                alert("No valid input");
        }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    
}



