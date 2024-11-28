function countValidSelections(nums) {
    // Helper function to simulate the process
    function simulate(start, direction) {
        const arr = [...nums]; // Create a copy of nums to simulate
        let curr = start;

        while (curr >= 0 && curr < arr.length) {
            if (arr[curr] === 0) {
                curr += direction; // Move in the current direction
            } else {
                arr[curr] -= 1; // Decrement the value
                direction = -direction; // Reverse direction
                curr += direction; // Move in the new direction
            }
            console.log(arr)
        }

        // Check if all elements in arr are 0
        return arr.every(num => num === 0);
    }

    let count = 0;

    // Iterate over all possible starting positions
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            // Simulate both directions for this starting position
            if (simulate(i, -1)) count++; // Left direction
            if (simulate(i, 1)) count++;  // Right direction
        }
    }

    return count;
}

// Example usage:
console.log(countValidSelections([1, 0, 2, 0, 3])); // Output: 2
console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0])); // Output: 0
