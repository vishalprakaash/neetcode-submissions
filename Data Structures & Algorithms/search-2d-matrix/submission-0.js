class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    let rows = matrix.length;
    let cols = matrix[0].length;

    // Treat the 2D matrix as a 1D sorted array
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Map mid back to 2D indices
        let row = Math.floor(mid / cols);
        let col = mid % cols;

        let midValue = matrix[row][col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
    }
}
