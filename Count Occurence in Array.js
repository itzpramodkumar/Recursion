function countOccurence(arr,index,target){
    // Base case
    if(index===arr.length){
        return 0;
    }
// Current work 
if(arr[index]===target){
    return 1+ countOccurence(arr,index+1,target);

}
// recursive call
return countOccurence(arr,index+1,target);
}
let arr=[1,2,3,4,4,4,4,5,6,7,7];
console.log(countOccurence(arr,0,4));

