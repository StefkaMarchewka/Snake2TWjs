let boardModel = new Board(40);
let boardView = new BoardView();
let boardController = new BoardController(boardModel, boardView);

boardController.createBoard();
boardController.createWall();