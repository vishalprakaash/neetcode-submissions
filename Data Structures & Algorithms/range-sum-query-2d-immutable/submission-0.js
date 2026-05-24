class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
   constructor(matrix) {
        this.sumMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            let tempSum = [];
            for (let j = 0; j < matrix[i].length; j++) {
                tempSum.push(j === 0 ? matrix[i][j] : matrix[i][j] + tempSum[j - 1]);
            }
            this.sumMatrix[i] = tempSum;
        }
    }

    sumRegion(row1, col1, row2, col2) {
        let totalSum = 0;
        for (let i = row1; i <= row2; i++) {
            totalSum += this.sumMatrix[i][col2] - (col1 === 0 ? 0 : this.sumMatrix[i][col1 - 1]);
        }
        return totalSum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
