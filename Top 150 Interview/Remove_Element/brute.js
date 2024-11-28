/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let s=0; 
    let count =0
    let e=nums.length-1
    let len=nums.length-1

   while(s<=e) {
        if(nums[s]==val && (nums[e]!=val))
      
        //then swap
        {  nums[s]=nums[e]
        // nums[e]='_'
        s++
        e--
        }
         
        else if(nums[s]==val && (nums[e]==val))
       {   
        e--}
        else 
        s++
        count++
        
    }
     nums.splice(e+1)
 
console.log( nums)
    return nums.length ;
    
};