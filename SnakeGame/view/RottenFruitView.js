class RottenFruitView {

    drawFruit(fruitModel) {
        let grids = document.getElementsByClassName("grid");
        let randomIndex = Math.floor(Math.random() * grids.length);

        while (!(this.checkIfNotCollision(grids, randomIndex))) {

            randomIndex = Math.floor(Math.random() * grids.length);
        }

        this.createPlaceForFruit(grids, randomIndex);
        return fruitModel = new RottenFruit(-10);
    }

    checkIfNotCollision(grids, randomIndex) {
        return !(grids.item(randomIndex).className === "grid wall" ||
            grids.item(randomIndex).className === "grid snake" ||
            grids.item(randomIndex).className === "grid snake snakeHead");
    }

    createPlaceForFruit(grids, randomIndex) {
        let gridForFruit = grids.item(randomIndex);
        gridForFruit.style.backgroundColor = "blue";
        //gridForFruit.classList.add("fruit");
        gridForFruit.classList.add("rotten");
    }

}

