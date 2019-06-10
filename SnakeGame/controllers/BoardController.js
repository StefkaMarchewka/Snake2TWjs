class BoardController {
    constructor(boardModel, boardView) {
        this.boardModel = boardModel;
        this.boardView = boardView;
    }

    createBoard() {
        let boardModelSize = this.boardModel.boardSize;

        this.boardView.renderBoard(boardModelSize);
    }

    createWall() {
        let boardModelSize = this.boardModel.boardSize;
        let buildingSpace = BoardController.calculateBuildingSpace(boardModelSize);
        this.boardView.renderWall(buildingSpace);
    }

    static calculateBuildingSpace(boardModelSize) {
        let list = [];

        for (let i = 0; i < boardModelSize; i++) {
            list.push(i);
            list.push((i * boardModelSize) + (boardModelSize - 1));
            if (i > 0) {
                list.push(boardModelSize * i);
                list.push(boardModelSize * (boardModelSize - 1) + i);
            }
        }
        return list;
    }

}

