var p1 = Math.floor((Math.random()*6)+1);
var imgSrc1 = "./images/dice"+p1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgSrc1);

var p2 = Math.floor((Math.random()*6)+1);
var imgSrc2 = "./images/dice"+p2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);

if(p1>p2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(p1<p2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}