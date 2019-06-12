class BoardView {

    renderBoard(boardModelSize) {
        for (let rows = 0; rows < boardModelSize; rows++) {
            for (let columns = 0; columns < boardModelSize; columns++) {
                $("#container").append("<div class='grid' x = " + columns.toString() + " y = " + rows.toString() + "></div>");
            }
        }
        $(".grid").width(960 / boardModelSize);
        $(".grid").height(960 / boardModelSize);

        let createdGrid = document.getElementsByClassName("grid");
        for (let i = 0; i < createdGrid.length; i++) {
            View.changeColorOfElement(createdGrid, i, "invisible");
        }
    }

    renderWall(listOfGridsToColor) {
        let grids = document.getElementsByClassName("grid");

        for (let i = 0; i < listOfGridsToColor.length; i++) {
            View.changeColorOfElement(grids, listOfGridsToColor[i], "black");
            View.addClassToElement(grids, listOfGridsToColor[i], "wall");
        }
    }

    static renderTraps() {
        let grids = document.getElementsByClassName("grid");
        let randomIndex = Math.floor(Math.random() * grids.length);

        while (!BoardView.checkCollisionWithSnake(grids, randomIndex)) {
            randomIndex = Math.floor(Math.random() * grids.length);
        }

        View.changeColorOfElement(grids, randomIndex, "black");
        View.addClassToElement(grids, randomIndex, "wall");
    }

    static checkCollisionWithSnake(grids, randomIndex) {
        return grids.item(randomIndex).className === "grid";
    }
}

let a = document.getElementById("newGameButton");

a.addEventListener('click', clickHandler);

function clickHandler() {
    View.reloadPage();
}