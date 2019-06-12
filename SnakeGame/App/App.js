let boardModel = new Board(40);
let boardView = new BoardView();
let boardController = new BoardController(boardModel, boardView);

boardController.createBoard();
boardController.createWall();

let fruitView = new FruitView;
let fruit = new Fruit(10);
let fruitContoller = new FruitController(fruit, fruitView);

let snakeModel = new Snake(6);
let snakeView = new SnakeView();
let snakeController = new SnakeController(snakeModel, snakeView, boardModel);


snakeController.initializeSnake();
fruitContoller.setFruitOdBoard();

/*
let audio = new Audio('resources/soundtrack.mp3');
audio.play().then(function(value) {
    console.log("lubie ladnych ludzi");
    // expected output: "Success!"
});*/
