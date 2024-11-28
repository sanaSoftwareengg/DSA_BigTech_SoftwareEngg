/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
function isZeroArray(newArr, queries) {
    let n= newArr.length
    
     let start=0;let end=0
     //console.log(queries.length)
    for(let k=0;k<queries.length;k++)
    {
       start=queries[k][0]
       end=queries[k][1]
       
// console.log('stsrt',start)
// console.log('end',end)

    
for(let i=start;i<=end;i++)
    {
        if(newArr[i]!=0)
            newArr[i]=newArr[i]-1
    }
   //console.log('newarr',newArr)
   
    }
   let sum=0
   for(let i=0;i<newArr.length;i++)
   {
    sum=sum+newArr[i]
   
   }
    if(sum==0)
    return true
    else return false
};
 

console.log(isZeroArray([4,3,2,1],[[1,3],[0,2]]))