function ticTacToe(arrayOfMoves) {
  let playerOneSymbol = "X";
  let playerTwoSymbol = "O";
  let isWinner = false;
  let index = 0;

  let board = [
    ["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"],
  ];

  for (let i = 0; i < arrayOfMoves.length; i++) {
    if (index >= 9) {
      break;
    } else {
      let [row, position] = arrayOfMoves[i].split(" ").join("");
      if (index % 2 === 0) {
        board[row][position] = playerOneSymbol;
        index++;
      } else {
        if (board[row][position] === "false") {
          board[row][position] = playerTwoSymbol;
          index++;
        } else {
          console.log("This place is already taken. Please choose another!");
        }
      }
      if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      } else if (
        board[0][0] === "O" &&
        board[0][1] === "O" &&
        board[0][2] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[1][0] === "X" &&
        board[1][1] === "X" &&
        board[1][2] === "X"
      ) {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      } else if (
        board[1][0] === "O" &&
        board[1][1] === "O" &&
        board[1][2] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[2][0] === "X" &&
        board[2][1] === "X" &&
        board[2][2] === "X"
      ) {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      } else if (
        board[2][0] === "O" &&
        board[2][1] === "O" &&
        board[2][2] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[0][0] === "X" &&
        board[1][0] === "X" &&
        board[2][0] === "X"
      ) {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      } else if (
        board[0][0] === "O" &&
        board[1][0] === "O" &&
        board[2][0] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[0][1] === "X" &&
        board[1][1] === "X" &&
        board[2][1] === "X"
      ) {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      } else if (
        board[0][1] === "O" &&
        board[1][1] === "O" &&
        board[2][1] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[0][2] === "O" &&
        board[1][2] === "O" &&
        board[2][2] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[0][2] === "X" &&
        board[1][2] === "X" &&
        board[2][2] === "X"
      ) {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      } else if (
        board[0][0] === "X" &&
        board[1][1] === "X" &&
        board[2][2] === "X"
      ) {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      } else if (
        board[0][0] === "O" &&
        board[1][1] === "O" &&
        board[2][2] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[0][2] === "O" &&
        board[1][1] === "O" &&
        board[2][0] === "O"
      ) {
        isWinner = true;
        console.log(`Player ${playerTwoSymbol} wins!`);
        break;
      } else if (
        board[0][2] === "X" &&
        board[1][1] === "X" &&
        board[2][0] === "X"
      ) {
        isWinner = true;
        console.log(`Player ${playerOneSymbol} wins!`);
        break;
      }
    }
  }

  if (!isWinner) {
    console.log("The game ended! Nobody wins :(");
    board.forEach((el) => console.log(el.join("\t")));
  } else {
    board.forEach((el) => console.log(el.join("\t")));
  }
}
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
