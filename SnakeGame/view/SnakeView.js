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
        grids.item(position).style.backgroundColor = "green";
        grids.item(position).classList.add("snake");
        grids.item(position).classList.add("snakeHead");

    }

    renderSnakeTail(snakeSize, boardSize, position, grids) {
        let currentTailPosition = position;
        for (let i = 0; i < snakeSize - 1; i++) {
            grids.item(currentTailPosition - boardSize).style.backgroundColor = "green";
            grids.item(currentTailPosition - boardSize).classList.add("snake");
            currentTailPosition -= boardSize;
        }
    }


    moveSnake(direction, snakeModel, testList) {
        let currentSnakeHeadPosition = snakeModel.getHeadPosition;

        switch (direction) {
            case "left":
                currentSnakeHeadPosition -= 1;
                this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList);
                break;
            case "right":
                currentSnakeHeadPosition += 1;
                this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList);
                break;
            case "up":
                currentSnakeHeadPosition -= 40;
                this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList);
                break;
            case "down":
                currentSnakeHeadPosition += 40;
                this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList);
                break;
        }
    }

    checkCollision(snakeHeadPosition, snakeModel) {
        if (document.getElementsByClassName("grid").item(snakeHeadPosition).className === "grid wall") {
            alert("TO JEST KURWA NIEPOWAZNE");
            window.location.reload();
        } else if (document.getElementsByClassName("grid").item(snakeHeadPosition).className === "grid snake snakeHead") {
            alert("TO JEST KURWA NIEPOWAZNE");
            window.location.reload();
        } else if (document.getElementsByClassName("grid").item(snakeHeadPosition).className === "grid fruit") {

            let fruitObject = fruitView.drawFruit();
            snakeModel.addScore(fruitObject.getPointsValue);
            alert(snakeModel.getScore);
        }
    }

    move(currentSnakeHeadPosition, snakeMode, testList) {
        let listOfCurrentSnakecoordinates = this.updateBodyCoordinatesList(currentSnakeHeadPosition, snakeModel, testList);
        this.renderSnakeHead(currentSnakeHeadPosition);
        this.deleteLastPartOfTail(listOfCurrentSnakecoordinates, snakeModel);
    }


    deleteLastPartOfTail(listOfCurrentCoordinates, snakeModel) {
        let grids = document.getElementsByClassName("snake");
        let snakeCoordinates = listOfCurrentCoordinates;
        let lastTailPartX = snakeCoordinates[0][0];
        let lastTailPartY = snakeCoordinates[0][1];
        let lastTailPart = document.querySelectorAll('[x = \"' + lastTailPartX + '\"][y = \"' + lastTailPartY + '\"]');
        snakeCoordinates.shift();

        console.log(lastTailPart);
        lastTailPart[0].style.backgroundColor = "transparent";
        lastTailPart[0].className = "grid";
        console.log("tail deleted");
        console.log("snake size = " + grids.length);
        snakeModel.setListOfBodyCoordinates = snakeCoordinates;
    }


    updateBodyCoordinatesList(snakeHeadPosition, snakeModel, testList) {
        let grids = document.getElementsByClassName("grid");
        let snakeBodyCoordinates = testList;

        snakeModel.setHeadPosition = snakeHeadPosition;

        let headCoordinateX = grids.item(snakeHeadPosition).getAttribute("x");
        let headCoordinateY = grids.item(snakeHeadPosition).getAttribute("y");

        snakeBodyCoordinates.push([headCoordinateX, headCoordinateY]);

        snakeModel.setListOfBodyCoordinates = snakeBodyCoordinates;
        return snakeBodyCoordinates;

    }
}