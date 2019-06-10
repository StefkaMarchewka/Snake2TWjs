class SnakeView {
    constructor() {
    }

    renderSnakeOnStart(centerOfTheBoard, snakeSize, boardSize) {
        console.log(snakeSize);
        let grids = document.getElementsByClassName("grid");

        this.renderSnakeHead(centerOfTheBoard, grids);
        this.renderSnakeTail(snakeSize, boardSize, centerOfTheBoard, grids);
    }

    renderSnakeHead(position, grids) {
        grids.item(position).style.backgroundColor = "red";
        grids.item(position).classList.add("snake");
        grids.item(position).classList.add("snakeHead");

    }

    renderSnakeTail(snakeSize, boardSize, centerOfTheBoard, grids) {
        let currentTailPosition = centerOfTheBoard;
        for (let i = 0; i < snakeSize -1; i++) {
            grids.item(currentTailPosition - boardSize).style.backgroundColor = "red";
            grids.item(currentTailPosition - boardSize).classList.add("snake");
            currentTailPosition -= boardSize;
        }
    }

}