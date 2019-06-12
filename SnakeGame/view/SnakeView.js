class SnakeView {

    renderSnakeOnStart(centerOfTheBoard, snakeSize, boardSize) {
        let grids = document.getElementsByClassName("grid");

        this.renderSnakeHead(centerOfTheBoard, grids);
        this.renderSnakeTail(snakeSize, boardSize, centerOfTheBoard, grids);
    }

    renderSnakeHead(position, grids = document.getElementsByClassName("grid")) {
        View.changeColorOfElement(grids, position, "green");
        View.addClassToElement(grids, position, "snake");
        View.addClassToElement(grids, position, "snakeHead");

    }

    renderSnakeTail(snakeSize, boardSize, position, grids) {
        let currentTailPosition = position;
        for (let i = 0; i < snakeSize - 1; i++) {
            View.changeColorOfElement(grids, currentTailPosition - boardSize, "green");
            View.addClassToElement(grids, currentTailPosition - boardSize, "snake");
            currentTailPosition -= boardSize;
        }
    }


    moveSnake(direction, snakeModel, testList) {
        let currentSnakeHeadPosition = snakeModel.getHeadPosition;
        let collisionType;

        switch (direction) {
            case "left":
                currentSnakeHeadPosition -= 1;
                collisionType = this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList, collisionType);
                break;
            case "right":
                currentSnakeHeadPosition += 1;
                collisionType = this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList, collisionType);
                break;
            case "up":
                currentSnakeHeadPosition -= 40;
                collisionType = this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList, collisionType);
                break;
            case "down":
                currentSnakeHeadPosition += 40;
                collisionType = this.checkCollision(currentSnakeHeadPosition, snakeModel, testList);
                this.move(currentSnakeHeadPosition, snakeModel, testList, collisionType);
                break;
        }
    }

    checkCollision(snakeHeadPosition, snakeModel) {
        if (document.getElementsByClassName("grid").item(snakeHeadPosition).className === "grid wall") {
            alert("You are dead");
            View.reloadPage();
        } else if (document.getElementsByClassName("grid").item(snakeHeadPosition).className === "grid snake snakeHead") {
            alert("You are dead");
            View.reloadPage();
        } else if (document.getElementsByClassName("grid").item(snakeHeadPosition).className === "grid fruit") {
            SnakeView.createTrap(snakeModel);
            return this.eatFruit(snakeModel);
        }
    }

    move(currentSnakeHeadPosition, snakeModel, snakeBodyCoordinates, collisionType) {
        let listOfCurrentSnakecoordinates = this.updateBodyCoordinatesList(currentSnakeHeadPosition, snakeModel, snakeBodyCoordinates);
        this.renderSnakeHead(currentSnakeHeadPosition);
        if (collisionType !== "fruit") {
            this.deleteLastPartOfTail(listOfCurrentSnakecoordinates, snakeModel);
        }
    }


    deleteLastPartOfTail(listOfCurrentCoordinates, snakeModel) {
        let snakeCoordinates = listOfCurrentCoordinates;
        let lastTailPartX = snakeCoordinates[0][0];
        let lastTailPartY = snakeCoordinates[0][1];
        let lastTailPart = document.querySelectorAll('[x = \"' + lastTailPartX + '\"][y = \"' + lastTailPartY + '\"]');
        snakeCoordinates.shift();

        lastTailPart[0].style.backgroundColor = "transparent";
        lastTailPart[0].className = "grid";
        console.log("tail deleted");
        snakeModel.setListOfBodyCoordinates = snakeCoordinates;
    }


    updateBodyCoordinatesList(snakeHeadPosition, snakeModel, snakeBodyCoordinates) {
        let grids = document.getElementsByClassName("grid");

        snakeModel.setHeadPosition = snakeHeadPosition;

        let headCoordinateX = grids.item(snakeHeadPosition).getAttribute("x");
        let headCoordinateY = grids.item(snakeHeadPosition).getAttribute("y");

        snakeBodyCoordinates.push([headCoordinateX, headCoordinateY]);

        snakeModel.setListOfBodyCoordinates = snakeBodyCoordinates;
        return snakeBodyCoordinates;

    }

    static createTrap(snakeModel) {
        if (snakeModel.getScore % 30 === 0) {
            BoardView.renderTraps();
        }
    }

    eatFruit(snakeModel) {
        let newFruit = fruitView.drawFruit();
        snakeController.addSnakeSpeed(4);
        snakeModel.addScore(newFruit.getPointsValue);
        this.updateScoreTable(snakeModel.getScore);
        return "fruit";
    }

    updateScoreTable(score) {
        let scoreLabel = document.getElementById("score");
        scoreLabel.innerText = score;
    }
}