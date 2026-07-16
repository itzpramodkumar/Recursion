function firstOccurence(arr,index,target){
    // Base Case
    if(index===arr.length){
        return-1;
    }
    // current work
    if(arr[index]==target){
        return index;
    }
    // Recursive call

    return firstOccurence(arr,index+1,target);

}
let arr=[5,8,9,5,3,21,1];
console.log(firstOccurence(arr,0,8));