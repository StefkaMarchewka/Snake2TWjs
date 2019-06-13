class FruitController {
    constructor(fruitModel, fruitView) {
        this.fruitView = fruitView;
        this.fruitModel = fruitModel;
    }

    setFruitOdBoard() {
        this.fruitView.drawFruit(this.fruitModel);
    }

    

}