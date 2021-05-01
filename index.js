var random_number1=Math.floor(Math.random()*6)+1;
var random_number2=Math.floor(Math.random()*6)+1;

var random_image="images/dice"+random_number1+".png";
document.querySelectorAll("img")[0].setAttribute("src",random_image);

var random_image="images/dice"+random_number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random_image);

if(random_number1==random_number2){
  document.querySelector("h1").innerHTML="Draw";
}
else if(random_number1>random_number2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(random_number1<random_number2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
