class View {

    static changeColorOfElement(grid, elementIndex, color) {
        grid.item(elementIndex).style.backgroundColor = color;
    }

    static addClassToElement(grid, elementIndex, className) {
        grid.item(elementIndex).classList.add(className);
    }

    static changeClassOfElement(grid, elementIndex, className) {
        grid.item(elementIndex).className = className
    }

    static reloadPage() {
        window.location.reload();
    }

}