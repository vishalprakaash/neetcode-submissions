class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
    let right = Math.max(...piles);

    const canFinish = (speed) => {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / speed);
        }
        return hours <= h;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canFinish(mid)) {
            right = mid; // try smaller speed
        } else {
            left = mid + 1; // need faster speed
        }
    }

    return left;
    }
}
