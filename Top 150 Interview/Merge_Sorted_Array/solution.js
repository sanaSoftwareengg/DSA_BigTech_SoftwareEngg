/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //     - Use two pointers starting from the back of both arrays.
    // - Compare elements and place the larger one at the end of nums1.
    // - Continue until all elements are merged.
    let p1=m-1;
    let p2=n-1;
    let p=m+n-1;
    //[1,2, 3 ,0,0, 0]    [2,5, 6 ]
    //      *       *           *
    //      p1      p           p2 
    
    //now start comparing
     while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }
    
        // Copy remaining elements from nums2 (if any)
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    };
    
    