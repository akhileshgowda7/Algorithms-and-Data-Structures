function reverse(str){
    reverseArray = [];
    for(let i=str.length -1;i>=0;i--){
        reverseArray.push(str[i])
    }
    return reverseArray.join('');
}

console.log(reverse("My name is Akhilesh"));