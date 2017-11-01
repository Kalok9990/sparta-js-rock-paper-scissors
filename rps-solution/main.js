//Get input
function getUserInput(){
  return prompt("PLease choose either rock, paper or scissors");
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
//Get the player move
function getPlayerMove(playerMove){
  return playerMove || getUserInput();
}

//Get the computer move
function getComputerMove(computerMove){
  return computerMove || randomPlay();
}

var test = getComputerMove();
console.log(test);
//will need to play to 5

//check for winner
