var findShortestSubArray = function(nums) {
    let count ={}
    for(i=0;i<nums.length;i++){
        if(nums[i] in count){
            count[nums[i]]= count[nums[i]]+1;
        }
        else{
            count[nums[i]] = 1;
        }
    }
    console.log(count)
    array = Object.values(count)
    // console.log(Math.max(...array))
    let maxValue =  Math.max(...array)
    let values = 0
   let final =  array.forEach((value,i)=>{
     if(value === 1 || value === maxValue){
        values++
     }
     console.log(values)
     return values
    })
    console.log("FInal Value")
    console.log(final)
    return final
};
findShortestSubArray([1,2,2,3,1])