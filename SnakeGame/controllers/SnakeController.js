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
        let testList = this.snakeModel.getListOfBodyCoordinates;
        this.moveSnake(this.snakeSpeed, testList);
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

    moveSnake(snakeSpeed, testList) {

        let a = setInterval(function () {
            console.log("Snake is waiting for direction");
        }, this.snakeSpeed);

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37:
                    if (this.currentDirection === "right") {
                        console.log("WRONG KEY");
                    } else {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "left";
                            this.snakeView.moveSnake("left", this.snakeModel, testList);
                            console.log("Snake is Moving left");

                        }.bind(this), this.snakeSpeed);
                    }
                    break;
                case 38:
                    if (this.currentDirection === "down") {
                        console.log("WRONG KEY");
                    } else {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "up";
                            this.snakeView.moveSnake("up", this.snakeModel, testList);
                            console.log("Snake is Moving up");

                        }.bind(this), this.snakeSpeed);
                    }
                    break;
                case 39:
                    if (this.currentDirection === "left") {
                        console.log("WRONG KEY");
                    } else {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "right";
                            this.snakeView.moveSnake("right", this.snakeModel, testList);
                            console.log("Snake is Moving right");

                        }.bind(this), this.snakeSpeed);
                    }
                    break;
                case 40:
                    if (this.currentDirection === "up") {
                        console.log("WRONG KEY");
                    } else {
                        clearInterval(a);
                        a = setInterval(function () {
                            this.currentDirection = "down";
                            this.snakeView.moveSnake("down", this.snakeModel, testList);
                            console.log("Snake is Moving down");

                        }.bind(this), this.snakeSpeed);
                    }
            }
        }.bind(this)

    }


}