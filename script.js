const player = (name, symbol) => {
    return{ name, symbol };
};

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]

    const getBoard = () => [...board];
    const resetBoard = () => board.fill("");
    const fillSpot = (index, symbol) => {
        board[index] == "" ? board[index] = symbol : alert("This spot has already been taken!!!");
    };
    const isFull = () => board.every(cell => cell != "");

    return { getBoard, resetBoard, fillSpot, isFull};
})();
