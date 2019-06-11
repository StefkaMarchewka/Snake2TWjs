class SnakeController {
    constructor(snakeModel, snakeView, boardModel) {
        this.snakeModel = snakeModel;
        this.snakeView = snakeView;
        this.boardModel = boardModel;
    }

    initializeSnake() {
        let snakeSpeed = 250;
        let startingSize = this.snakeModel.snakeSize;
        this.placeSnakeInTheCenter(startingSize);
        let testList = this.snakeModel.getListOfBodyCoordinates;
        console.log(testList);
        this.moveSnake(snakeSpeed, testList);
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

        for (let i = 0; i < listOfBodyElements.length; i ++) {
            let x = listOfBodyElements.item(i).getAttribute("x");
            let y = listOfBodyElements.item(i).getAttribute("y");
            snakeBodyCoordinates.push([x,y]);
            console.log("pushed " + i);
        }

        return snakeBodyCoordinates;
    }

    calculateCenterOfTheBoard(boardSize) {
        return (boardSize * boardSize) / 2 + (boardSize / 2);
    }

    moveSnake(snakeSpeed, testList) {

        let a = setInterval(function (){
            console.log("Snake is Moving in default direction");
            } , snakeSpeed);

        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    clearInterval(a);
                    a = setInterval(function (){
                        this.snakeView.moveSnake("left", this.snakeModel, testList);
                        console.log("Snake is Moving left");
                    }.bind(this) , snakeSpeed);
                    break;
                case 38:
                    clearInterval(a);
                    a = setInterval(function (){
                        this.snakeView.moveSnake("up", this.snakeModel, testList);
                        console.log("Snake is Moving up");
                    }.bind(this) , snakeSpeed);
                    break;
                case 39:
                    clearInterval(a);
                    a = setInterval(function (){
                        this.snakeView.moveSnake("right", this.snakeModel, testList);
                        console.log("Snake is Moving right");
                    }.bind(this) , snakeSpeed);
                    break;
                case 40:
                    clearInterval(a);
                    a = setInterval(function (){
                        this.snakeView.moveSnake("down", this.snakeModel, testList);
                        console.log("Snake is Moving down");
                    }.bind(this) , snakeSpeed);
                    break;
            }
        }.bind(this)

    }


}