let xturn=true;
let gameOver=false;
let board=new Array(9).fill("");
let xWins=0;
let oWins=0;
let buttons= document.querySelectorAll(".butt");
let reset=document.querySelector("#reset");
let xScore = document.querySelector("#xScore");
let oScore = document.querySelector("#oScore");

 function disablekeys(){
  buttons.forEach(function(button){
          button.disabled=true;
        });
 }
 let winpattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 ];

buttons.forEach(function(button,index){
  button.addEventListener("click",function(){
     if(gameOver) return;
      handleclick(button,index);
      
  });
 });
 
 reset.addEventListener("click",function(){
  resetgame();
 });


 function gamestatus(){
let win=winner();
      if(win !=null){
        gameOver=true;
        disablekeys();
        
        if(win==="X"){
          xWins++;
          xScore.innerText="X Wins :"+xWins;
          xScore.style.borderColor=" rgb(159, 255, 15)";
          xScore.style.backgroundColor=" rgb(189, 246, 102)";
          oScore.style.borderColor=" #f1bb1a";
          oScore.style.backgroundColor=" #eac75c";
        }
        else{
          oWins++;
          oScore.innerText="O Wins :"+oWins;
          oScore.style.borderColor=" rgb(159, 255, 15)";
          oScore.style.backgroundColor=" rgb(189, 246, 102)";
          xScore.style.borderColor=" #f1bb1a";
          xScore.style.backgroundColor=" #eac75c";
        }
        alert(win+" Wins !");
      }
      else if(board.every(c=>c!=="")){
        alert(" MATCH DRAW");
        gameOver=true;
        disablekeys();
      }
 }

 function handleclick(button,index){
      if(gameOver) {return;}
      let symbol = xturn ? "X" : "O";
      button.innerText = symbol;
      board[index] = symbol;
      xturn = !xturn;
      button.disabled = true;
      gamestatus();
 }
  function winner(){
  for(let pattern of winpattern){
    let a=pattern[0];
    let b=pattern[1];
    let c=pattern[2];
    if(board[a]!="" && board[a]==board[b] && board[b]==board[c]){
      console.log("WONNNN");
      buttons[a].style.backgroundColor = "rgb(189, 246, 102)";
      buttons[b].style.backgroundColor = "rgb(189, 246, 102)";
      buttons[c].style.backgroundColor = "rgb(189, 246, 102)";
      buttons[a].style.borderColor = " rgb(159, 255, 15)";
      buttons[b].style.borderColor = " rgb(159, 255, 15)";
      buttons[c].style.borderoundColor = " rgb(159, 255, 15)";
      return board[a];
    }
  
  }
  return null;
 }

  function resetgame(){
    board.fill("");
  // board.forEach(function(butt,index){
  //   board[index]="";  
  // });
  buttons.forEach(function(butt,index){
      butt.disabled=false;
      butt.innerText="";
    });
    buttons.forEach(function(button) {
    button.style.backgroundColor = " #5b95f3";
    button.style.borderColor=" #3381ff ";
});
    xturn=true;
    gameOver=false;

 };