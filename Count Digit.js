function Count(n){
    if(n==0){
        return 0;
    }

    return 1+Count(Math.floor(n/10));
}
let n=123456;
console.log(Count(n)); 