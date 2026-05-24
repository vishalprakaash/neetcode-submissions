class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
          const n = nums.length;
    const result= new Array(n).fill(1);

    // Step 1: Prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // Step 2: Suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        console.log(`result[i]: ${result[i]}, suffix: ${suffix}, i: ${i}, nums[i]: ${nums[i]}`)
        suffix *= nums[i];
        console.log(`suffix: ${suffix}, i: ${i}`)
    }

    return result;
    }
}
