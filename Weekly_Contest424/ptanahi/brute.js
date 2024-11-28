function countValidSelections(nums)
{
let count=0
for(let i=0;i<nums.length;i++)
{
    if(nums[i]==0)
        {
            if (simulates(nums,i, -1)) count++; // Left direction
    if (simulates(nums,i, 1)) count++;  // Right direction


        }
    }
return count;

}
function simulates(nums,startindex,direction)
{
    let curr=startindex
    let newarr=[...nums]
    while(curr<newarr.length && curr>=0)

        {
            if(newarr[curr]==0)
                curr+=direction
            else
          {  newarr[curr]=newarr[curr]-1
            direction=-direction
        curr+=direction
    }
        }
        return newarr.every(num=>num===0)

}






console.log(countValidSelections([1, 0, 2, 0, 3])); // Output: 2
console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0])); // Output: 0
