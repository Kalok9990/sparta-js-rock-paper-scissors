var player, comp;
winorlose();

function winorlose(){
  player = 0;
  comp = 0;
  do {
    AI = Math.floor(Math.random() * 3) + 1;
    var choice = prompt("1) Rock, 2) paper or 3)scissors?");
    console.log(AI);

    switch (choice) {
      //Player picks rock
      case "1":
        if(AI === 1){
          alert("Computer picked rock, you drew.");
          break;
        }else if(AI === 2){
          alert("Computer picked paper, you win");
          player++;
          break;
        }else if(AI === 3){
          alert("Computer picked scissors, you lose");
          comp++;
          break;
        }
      //Player picks paper
      case "2":
        if(AI === 1){
          alert("Computer picked rock, you win");
          player++;
          break;
        }else if(AI === 2){
          alert("Computer picked paper, you drew");
          break;
        }else if(AI === 3){
          alert("Computer picked paper, you lose");
          comp++;
          break;
        }
      //Player picks scissors
      case "3":
        if(AI === 1){
          alert("Computer picked rock, you lose");
          comp++;
          break;
        }else if(AI === 2){
          alert("Computer picked paper, you win");
          player++;
          break;
        }else if(AI === 3){
          alert("Computer picked paper, you drew");
          break;
        }
      //Player picked something else
      default:
        alert("Not a viable choice.")
        break;
    }
    alert("Player: " +player + " Computer: " + comp)
  } while (player < 5 && comp < 5);
  winner();
}

function again(){
  //Function to ask if player wants to play again
  var again = prompt("Would you like to play again?(y or n)")
  if(again == "y"){
    player = 0;
    comp = 0;
    winorlose();
  }
}

function winner(){
  //Function to bring alert to check if there is a winner
  if(player === 5){
    alert("Player wins!");
    again();
  }else if(comp === 5){
    alert("Computer wins!!")
    again();
  }
}
