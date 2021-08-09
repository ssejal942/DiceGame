var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1+1);
var randomImage="dice"+randomNumber1+".png";
var randomImageSource="Images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="Images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
   

if(randomNumber2>randomNumber1)
{
    document.querySelector(".heading").textContent= "Player 2 Wins";
}
else if ( randomNumber1>randomNumber2)
{
    document.querySelector(".heading").textContent= "Player 1 Wins" ;
}
else if (randomNumber2===randomNumber1)
{
    document.querySelector(".heading").textContent= " Draw" ;
}