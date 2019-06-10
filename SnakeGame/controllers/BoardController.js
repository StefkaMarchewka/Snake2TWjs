
class BoardController {
    createBoard() {
        for (let rows = 0; rows < 40; rows++) {
            for (let columns = 0; columns < 40; columns++) {
                $("#container").append("<div class='grid'></div>");
            }
        }
        $(".grid").width(960/40);
        $(".grid").height(960/40);
    }
}

/*
function createBoard() {
    for (let rows = 0; rows < 40; rows++) {
        for (let columns = 0; columns < 40; columns++) {
            $("#container").append("<div class='grid'></div>");
        }
    }
    $(".grid").width(960/40);
    $(".grid").height(960/40);
}*/
