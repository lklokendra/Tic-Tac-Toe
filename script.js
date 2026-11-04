let xturn=true;
let gameOver=false;
let board=new Array(9).fill("");
let buttons= document.querySelectorAll(".butt");
 buttons.forEach(function(button,index){
  button.addEventListener("click",function(){
    if(gameOver) {return;}
      let symbol = xturn ? "X" : "O";

      button.innerText = symbol;
      board[index] = symbol;
      xturn = !xturn;
      button.disabled = true;
      let win=winner();
      if(win !=null){
        alert(win+" Wins !");
        gameOver=true;
        disablekeys();
      }
      else if(board.every(c=>c!=="")){
        alert(" MATCH DRAW");
        gameOver=true;
        disablekeys();
      }
  });
 });
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
 function winner(){
  for(let pattern of winpattern){
    let a=pattern[0];
    let b=pattern[1];
    let c=pattern[2];
    if(board[a]!="" && board[a]==board[b] && board[b]==board[c]){
      console.log("WONNNN");
      return board[a];
    }
    
  }
  return null;
 }