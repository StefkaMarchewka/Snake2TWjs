class BoardView {
    constructor() {
    }

    renderBoardView(boardModelSize) {
        for (let rows = 0; rows < boardModelSize; rows++) {
            for (let columns = 0; columns < boardModelSize; columns++) {
                $("#container").append("<div class='grid'></div>");
            }
        }
        $(".grid").width(960/40);
        $(".grid").height(960/40);
    }

}