class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const startingPixel = image[sr][sc]
        if (startingPixel === color) return image

        const directions = [[1,0], [-1,0], [0,1], [0, -1]]
        function dfs(r,c) {
            if(r < 0 || r >= image.length || c < 0 || c >= image[0].length) return
            if(image[r][c] === startingPixel) {
                image[r][c] = color
            } else {
                return
            }
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        }
        dfs(sr,sc);
        return image
    }
}
