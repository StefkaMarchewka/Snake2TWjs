class Snake {
    constructor(startingSize) {
        this.startingSize = startingSize;
        this.headPosition = 0;
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
}