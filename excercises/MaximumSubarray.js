var maxSubArray = function(nums) {
    
    let pre = 0;
     let ans = nums[0]
     
     for(i=0;i<nums.length;i++){
         pre = Math.max(pre + nums[i],nums[i]);
         ans = Math.max(pre,ans)
     }
     
     return ans
 };
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


