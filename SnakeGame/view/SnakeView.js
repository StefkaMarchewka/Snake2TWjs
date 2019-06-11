class SnakeView {
    constructor() {
    }

    renderSnakeOnStart(centerOfTheBoard, snakeSize, boardSize) {
        console.log(snakeSize);
        let grids = document.getElementsByClassName("grid");

        this.renderSnakeHead(centerOfTheBoard, grids);
        this.renderSnakeTail(snakeSize, boardSize, centerOfTheBoard, grids);
    }

    renderSnakeHead(position, grids = document.getElementsByClassName("grid")) {
        grids.item(position).style.backgroundColor = "red";
        grids.item(position).classList.add("snake");
        grids.item(position).classList.add("snakeHead");

    }

    renderSnakeTail(snakeSize, boardSize, position, grids) {
        let currentTailPosition = position;
        for (let i = 0; i < snakeSize -1; i++) {
            grids.item(currentTailPosition - boardSize).style.backgroundColor = "red";
            grids.item(currentTailPosition - boardSize).classList.add("snake");
            currentTailPosition -= boardSize;
        }
    }

/*    deleteOldHead(position, grids = document.getElementsByClassName("grid")) {
        grids.item(position).className = "snake";
        grids.item(position).classList.add("grid");
    }*/

    moveSnake(direction, snakeModel) {
        this.changeHeadPosition(direction, snakeModel);
        this.deleteLastPartOfTail();
    }

    deleteLastPartOfTail() {
        var grids = document.getElementsByClassName("snake");

        grids.item(0).style.backgroundColor = "blue";
        grids.item(0).className = "grid";
        console.log("tail deleted")
        console.log("snake size = " + grids.length);
    }

    changeHeadPosition(direction, snakeModel) {
        let currentSnakeHeadPosition = snakeModel.getHeadPosition;

        switch(direction) {
            case "left":
                currentSnakeHeadPosition -= 1;
                snakeModel.setHeadPosition = currentSnakeHeadPosition;
                this.renderSnakeHead(currentSnakeHeadPosition);
                //this.deleteOldHead(currentSnakeHeadPosition);
                break;

        }
    }
}