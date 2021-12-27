const board = document.querySelector(".board");
const boardWidth = 600;
const fruitDiameter = 30;
const fruit = document.createElement("div");
let snakeLength = 30;
fruit.classList.add("fruit");
const snake = document.createElement("div");
snake.classList.add("snake");
let automaticSnakeMoveId;
let snakePosition = [
    Math.ceil(Math.random() *19)* 30,
    Math.ceil(Math.random() *19)* 30
];

function renderFruit() {
  let fruitPosition = [
    Math.ceil(Math.random() *19)* 30,
    Math.ceil(Math.random() *19)* 30
  ];
  fruit.style.left = fruitPosition[0] + "px";
  fruit.style.top = fruitPosition[1] + "px";
  let bottomLeftCorner = [
    fruitPosition[0] + "px",
    fruitPosition[1] + fruitDiameter + "px",
  ];
  let topLeftCorner = [fruitPosition[0] + "px", fruitPosition[1] + "px"];
  let bottomRightCorner = [
    fruitPosition[0] + 30 + "px",
    fruitPosition[1] + fruitDiameter + "px",
  ];
  let topRightCorner = [fruitPosition[0] + 30 + "px", fruitPosition[1] + "px"];
  console.log(
    bottomLeftCorner,
    topLeftCorner,
    bottomRightCorner,
    topRightCorner
  );
  board.append(fruit);
}
renderFruit();

function renderSnake() {
  snake.style.left = snakePosition[0] + "px";
  snake.style.top = snakePosition[1] + "px";

  let bottomLeftCorner = [
    snakePosition[0] + "px",
    snakePosition[1] + snakeLength + "px",
  ];
  let topLeftCorner = [snakePosition[0] + "px", snakePosition[1] + "px"];
  let bottomRightCorner = [
    snakePosition[0] + snakeLength + "px",
    snakePosition[1] + snakeLength + "px",
  ];
  let topRightCorner = [
    snakePosition[0] + snakeLength + "px",
    snakePosition[1] + "px",
  ];
  board.append(snake);
  
}
renderSnake();

function startGameMove(e){
    if(e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="ArrowLeft"||e.key==="ArrowRight")
    moveAutomatically(e)
  automaticSnakeMoveId = setInterval(moveAutomatically, 700, e);
}

document.addEventListener("keydown", startGameMove);

//Make snake move by itself

//

function moveAutomatically(e) {
  switch (e.key) {
    case "ArrowDown":
      snakePosition[1] += 30;
      document.removeEventListener("keydown", startGameMove)
      break;
    case "ArrowUp":
      snakePosition[1] -= 30;
      document.removeEventListener("keydown", startGameMove)
      break;
    case "ArrowLeft":
      snakePosition[0] -= 30;
      document.removeEventListener("keydown", startGameMove)
      break;
    case "ArrowRight":
      snakePosition[0] += 30;
      document.removeEventListener("keydown", startGameMove)
      break;
  }
 
  renderSnake();
}
