class FruitController {
    constructor(fruitModel, fruitView) {
        this.fruitView = FruitView;
        //this.fruitModel = FruitModel;
    }

    setFruitOdBoard(){
        setInterval(fruitView.drawFruit(), 2000);
    }

}