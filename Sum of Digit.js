function SumDigit(n){
    if(n==0){
        return 0
    }
    return(n%10)+SumDigit(Math.floor(n/10));
}
let n=12341234567890;
console.log(SumDigit(n));