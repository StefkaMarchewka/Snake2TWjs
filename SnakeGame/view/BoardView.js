class BoardView {
    constructor() {
    }

    renderBoard(boardModelSize) {
        for (let rows = 0; rows < boardModelSize; rows++) {
            for (let columns = 0; columns < boardModelSize; columns++) {
                $("#container").append("<div class='grid' x = "+columns.toString()+" y = "+rows.toString()+"></div>");
            }
        }
        $(".grid").width(960/40);
        $(".grid").height(960/40);
    }

    renderWall(listOfGridsToColor) {
        let grids = document.getElementsByClassName("grid");

        for (let i = 0; i < listOfGridsToColor.length; i++) {
            grids.item(listOfGridsToColor[i]).style.backgroundColor = "black";
            grids.item(listOfGridsToColor[i]).classList.add("wall");
        }
    }
}

let a = document.getElementById("newGameButton");

a.addEventListener('click', clickHandler);

function clickHandler() {
    window.location.reload();
}