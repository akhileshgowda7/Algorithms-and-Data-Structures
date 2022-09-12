function mergeSortedArray(arr1,arr2){
    finalArray = [...arr1,...arr2]
    return finalArray.sort((a,b)=>{
        return a-b
    });
}

console.log(mergeSortedArray([0,3,4,31],[4,6,30]))