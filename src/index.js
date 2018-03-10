module.exports = function solveSudoku(matrix) {
    var matrixCopy = matrix.slice();

    function checkRow(matrixCopy, row, num) {
        for (var i = 0; i < matrixCopy.length; i++)
            if (matrixCopy[row][i] == num) {
                return false;
            }
        return true;
    }

    function checkCol(matrixCopy, col, num) {
        for (var i = 0; i < matrixCopy.length; i++)
            if (matrixCopy[i][col] == num) {
                return false;
            }
        return true;
    }

    function checkSquare(matrixCopy, row, col, num) {
        var arrRow = (Math.floor(row / 3)) * 3;
        var arrCol = (Math.floor(col / 3)) * 3;
        for (var i = arrRow; i < arrRow + 3; i++)
            for (var j = arrCol; j < arrCol + 3; j++)
                if (matrixCopy[i][j] == num) {
                    return false;
                }
        return true;
    }

    function matrixFunction(matrixCopy, arr) {
        for (var i = arr[0]; i < matrixCopy.length; i++) {
            for (var j = arr[1]; j < matrixCopy.length; j++) {
                if (matrixCopy[i][j] == 0) {
                    arr[0] = i;
                    arr[1] = j;
                    return false;
                }
            }
        }
        return true;
    }

    function solve(matrixCopy) {
        var arr = [0, 0];
        if (matrixFunction(matrixCopy, arr)) {
            return true;
        }
        var row = arr[0],
            col = arr[1];
        for (var i = 1; i <= 9; i++) {
            if (checkRow(matrixCopy, row, i) && checkCol(matrixCopy, col, i) && checkSquare(matrixCopy, row, col, i)) {
                matrixCopy[row][col] = i;
                if (solve(matrixCopy)) {
                    return true;
                }
                matrixCopy[row][col] = 0;
            }
        }
        return false;
    }

    solve(matrixCopy);
    return matrixCopy;
}
