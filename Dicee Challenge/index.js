var randNum1 = Math.floor(Math.random() * 6) + 1;
var randDiceImg1 = "images\\dice" + randNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randDiceImg1);

var randNum2 = Math.floor(Math.random() * 6) + 1;
var randDiceImg2 = "images\\dice" + randNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randDiceImg2);

if (randNum1 > randNum2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 won!!";
}else if(randNum1 < randNum2)
{
    document.querySelector("h1").innerHTML = "Player 2 won!!🚩";
}else
{
    document.querySelector("h1").innerHTML = "Draw🥲";
}