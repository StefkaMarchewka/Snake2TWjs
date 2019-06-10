class SnakeController {
    constructor(snakeModel, snakeView, boardModel) {
        this.snakeModel = snakeModel;
        this.snakeView = snakeView;
        this.boardModel = boardModel;
    }

    initalizeSnake() {
        let snakeSpeed = 250;
        let startingSize = this.snakeModel.snakeSize;

        this.placeSnakeInTheCenter(startingSize);
        this.moveSnake(snakeSpeed);
    }

    placeSnakeInTheCenter(snakeSize) {
        let boardSize = this.boardModel.boardSize;
        let centerOfTheBoard = this.calculateCenterOfTheBoard(boardSize);
        this.snakeView.renderSnakeOnStart(centerOfTheBoard, snakeSize, boardSize);
    }

    calculateCenterOfTheBoard(boardSize) {
        return (boardSize * boardSize) / 2 + (boardSize / 2);
    }

    moveSnake(snakeSpeed) {

        let a = setInterval(function (){
            console.log("Snake is Moving in default direction");
            } , snakeSpeed);

        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    clearInterval(a);
                    a = setInterval(function (){
                        console.log("Snake is Moving left");
                    } , snakeSpeed);
                    break;
                case 38:
                    clearInterval(a);
                    a = setInterval(function (){
                        console.log("Snake is Moving up");
                    } , snakeSpeed);
                    break;
                case 39:
                    clearInterval(a);
                    a = setInterval(function (){
                        console.log("Snake is Moving right");
                    } , snakeSpeed);
                    break;
                case 40:
                    clearInterval(a);
                    a = setInterval(function (){
                        console.log("Snake is Moving down");
                    } , snakeSpeed);
                    break;
            }
        }

    }


}