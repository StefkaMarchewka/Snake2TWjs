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
        setInterval(function() {
            View.changeColorOfElement(grids, randomIndex, "black");
            View.addClassToElement(grids, randomIndex, "wall");
            setTimeout(function(){  
                View.changeColorOfElement(grids, randomIndex+1, "black");
                View.addClassToElement(grids, randomIndex+1, "wall");
                setTimeout(function(){
                    View.changeColorOfElement(grids, randomIndex+2, "black");
                View.addClassToElement(grids, randomIndex+2, "wall");
                },500)
            }, 1000);
            View.changeColorOfElement(grids, randomIndex+1, "white");
            View.removeClassFromElement(grids, randomIndex+1, "wall");
            View.changeColorOfElement(grids, randomIndex+2, "white");
            View.removeClassFromElement(grids, randomIndex+2, "wall");
        }, 2000)
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