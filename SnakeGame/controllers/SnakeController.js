class SnakeController {
    constructor(snakeModel, snakeView, boardModel) {
        this.snakeModel = snakeModel;
        this.snakeView = snakeView;
        this.boardModel = boardModel;
    }

    initalizeSnake() {
        let startingSize = this.snakeModel.snakeSize;
        this.placeSnakeInTheCenter(startingSize);
    }

    placeSnakeInTheCenter(snakeSize) {
        let boardSize = this.boardModel.boardSize;
        let centerOfTheBoard = this.calculateCenterOfTheBoard(boardSize);
        this.snakeView.renderSnakeOnStart(centerOfTheBoard, snakeSize, boardSize);
    }

    calculateCenterOfTheBoard(boardSize) {
        return (boardSize * boardSize) / 2 + (boardSize / 2);
    }
}