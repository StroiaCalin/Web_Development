var zar1=Math.random()*6 +1 ;
zar1=Math.floor(zar1);
var zar2=Math.random()*6 +1 ;
zar2=Math.floor(zar2);
zar1= "./images/dice" + zar1 + ".png";
zar2= "./images/dice" + zar2 + ".png";
 
document.querySelectorAll("img")[0].setAttribute("src",zar1);
document.querySelectorAll("img")[1].setAttribute("src",zar2);

if(zar1 > zar2)
{
    document.querySelector("h1").innerHTML="Player1 wins!!!";
}
if(zar1 < zar2)
{
    document.querySelector("h1").innerHTML="Player2 wins!!!";
}
if(zar1 === zar2)
{
    document.querySelector("h1").innerHTML="Draw!!!";
}