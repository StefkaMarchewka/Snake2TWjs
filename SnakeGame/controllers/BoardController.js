class BoardController {
    constructor(boardModel) {
        this.boardModel = boardModel;
    }

    createBoard() {
        let boardModelSize = this.boardModel.boardSize;
        let boardView = new BoardView();

        boardView.renderBoardView(boardModelSize);
    }
}

