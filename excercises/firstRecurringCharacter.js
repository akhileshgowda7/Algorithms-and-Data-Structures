let recurring = function(array){
    let hashMap = {}
let recurringCharacter ;
  for(i=0;i<array.length;i++){
    if(array[i] in hashMap){
     recurringCharacter = array[i]
     break;
    }
    else{
        hashMap[array[i]] = 1
    }
  } 
// console.log(recurringCharacter)
return recurringCharacter
}

console.log(recurring([2,5,1,2,3,5,1,2,4]));