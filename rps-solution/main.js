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

//will need to play to 5
function startgame(){
  alert("Let's play Rock, Paper, Scissors!");

  //score variables
  var playerScore = 0;
  var compScore = 0;

  //play to five
  while(playerScore < 5 && compScore < 5){
    var playerMove = getPlayerMove();
    var compMove = getComputerMove();
    var winner = checkForWinner(playerMove, compMove);

    if (winner === "player"){
      playerScore ++;
      alert("The player won that round with - " + playerMove + "against - " + compMove + "-------" + "The scores are --- Player " + playerScore + "Computer score --- " + compScore);
    } else if (winner === "computer"){
      compScore ++;
      alert("The computer won that round with - " + compMove + "against - " + playerMove + "-------" + "The scores are --- Player " + playerScore + "Computer score --- " + compScore);
    } else {
      alert("That was a tie with - " + playerMove + compMove)
    }
  }
}

//check for winner
function checkForWinner(playerMove, compMove){
  var winner;
  if(playerMove === compMove){
    winner = "tie";
  }else if((playerMove === "rock" && compMove === "scissors")||(playerMove === "paper" && compMove === "rock")||(playerMove === "scissors" && compMove === "paper")){
    winner = "player";
  }else{
    winner = "computer";
  }
  return winner;
}

startgame();
