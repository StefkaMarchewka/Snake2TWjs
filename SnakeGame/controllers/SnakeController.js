class SnakeController {
    constructor(snakeModel, snakeView, boardModel) {
        this.snakeModel = snakeModel;
        this.snakeView = snakeView;
        this.boardModel = boardModel;
        this.currentDirection = undefined;
        this.snakeSpeed = 150;
    }

    addSnakeSpeed(value) {
        this.snakeSpeed -= value;
    }

    initializeSnake() {
        let startingSize = this.snakeModel.snakeSize;
        this.placeSnakeInTheCenter(startingSize);
        let snakeBodyCoordinates = this.snakeModel.getListOfBodyCoordinates;
        this.moveSnake(snakeBodyCoordinates);
    }

    placeSnakeInTheCenter(snakeSize) {
        let boardSize = this.boardModel.boardSize;
        let centerOfTheBoard = this.calculateCenterOfTheBoard(boardSize);
        this.snakeModel.setHeadPosition = centerOfTheBoard;
        this.snakeView.renderSnakeOnStart(centerOfTheBoard, snakeSize, boardSize);
        this.snakeModel.setListOfBodyCoordinates = this.getCoordinatesOfSnakeBody();
    }

    getCoordinatesOfSnakeBody() {
        let listOfBodyElements = document.getElementsByClassName("snake");
        let snakeBodyCoordinates = [];

        for (let i = 0; i < listOfBodyElements.length; i++) {
            let x = listOfBodyElements.item(i).getAttribute("x");
            let y = listOfBodyElements.item(i).getAttribute("y");
            snakeBodyCoordinates.push([x, y]);
        }

        return snakeBodyCoordinates;
    }

    calculateCenterOfTheBoard(boardSize) {
        return (boardSize * boardSize) / 2 + (boardSize / 2);
    }

    moveSnake(snakeBodyCoordinates) {

        let a = setInterval(function () {
            console.log("Snake is waiting for direction");
        }, this.snakeSpeed);

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37: //right
                    if (!(this.currentDirection === "right")) {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "left";
                            this.snakeView.moveSnake("left", this.snakeModel, snakeBodyCoordinates);
                        }.bind(this), this.snakeSpeed);
                    }
                    break;
                case 38: //down
                    if (!(this.currentDirection === "down")) {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "up";
                            this.snakeView.moveSnake("up", this.snakeModel, snakeBodyCoordinates);
                        }.bind(this), this.snakeSpeed);
                    }
                    break;
                case 39: //left
                    if (!(this.currentDirection === "left")) {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "right";
                            this.snakeView.moveSnake("right", this.snakeModel, snakeBodyCoordinates);
                        }.bind(this), this.snakeSpeed);
                    }
                    break;
                case 40: //up
                    if (this.currentDirection === "up") {
                        console.log("WRONG KEY");
                    } else {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "down";
                            this.snakeView.moveSnake("down", this.snakeModel, snakeBodyCoordinates);
                        }.bind(this), this.snakeSpeed);
                    }
            }
        }.bind(this)
    }

}