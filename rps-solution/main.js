//Get input
function getUserInput(){
  return prompt("PLease choose either rock, paper or scissors");
}

//Get the player move
function getPlayerMove(){
  return getUserInput();
}

//Random play
function randomPlay(){
  var randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0){
    return "rock";
  }else if(randomNum === 1){
    return "paper";
  }else{
    return "scissors";
  }
}

var test = randomPlay();
console.log(test);
//Get the computer move

//will need to play to 5

//check for winner
