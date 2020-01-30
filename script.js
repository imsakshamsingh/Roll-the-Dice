var arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
function rollDice(){
var x = Math.random();
x = x*6 ;
x = Math.floor(x);
console.log(x);
console.log(arr[x]);
document.querySelector(".img1").src = arr[x];
var y = Math.random();
y  = y *6;
y  = Math.floor(y);

document.querySelector(".img2").src = arr[y];
if(x>y){
  document.querySelector("h1").innerHTML = "🚩 Player 1 WINNER";
}
else if(x==y)   document.querySelector("h1").innerHTML = "Try Again";
else
document.querySelector("h1").innerHTML = "Player 2 WINNER 🚩";

}
