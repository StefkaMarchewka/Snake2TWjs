class RottenFruitController {
    constructor(fruitModel, fruitView) {
        this.fruitView = fruitView;
        this.fruitModel = fruitModel;
    }

    setFruitOdBoard() {
        //this.fruitView.drawFruit(this.fruitModel);
        setInterval(function(){
            this.fruitView.drawFruit(this.model)
        }.bind(this), 10000);
        
    }

    

}