class FruitView{
    constructor() {
    }

    drawFruit(){
        let grids = document.getElementsByClassName("grid");
        let randomIndex = Math.floor(Math.random()*grids.length);
        
        while (!(this.checkIfNotCollision(grids, randomIndex))) {

            randomIndex = Math.floor(Math.random()*grids.length);
        }
        let gridForFruit = grids.item(randomIndex);
        this.createPlaceForFruit(gridForFruit);       
    }

    checkIfNotCollision(grids, randomIndex){
        if (grids.item(randomIndex).className === "grid wall" ||
            grids.item(randomIndex).className === "grid snake" ||
            grids.item(randomIndex).className === "grid snake snakeHead"){
            return false
        } else {
            return true;
        }
    }

    createPlaceForFruit(gridForFruit){
        gridForFruit.style.backgroundColor = "orange";
        gridForFruit.classList.add("fruit");
    }

}

