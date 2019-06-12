class Snake {
    constructor(startingSize) {
        this.startingSize = startingSize;
        this.headPosition = 0;
        this.listOfBodyCoordinates = [];
        this.score = 0;
    }

    get getScore() {
        return this.score;
    }

    set setScore(value) {
        this.score = value;
    }

    addScore(value) {
        this.score += value;
    }

    get snakeSize() {
        return this.startingSize;
    }

    set setHeadPosition(value) {
        this.headPosition = value;
    }
    get getHeadPosition() {
        return this.headPosition;
    }

    get getListOfBodyCoordinates() {
        return this.listOfBodyCoordinates;
    }

    set setListOfBodyCoordinates(listOfCoordinates) {
        this.listOfBodyCoordinates = listOfCoordinates;
    }
}