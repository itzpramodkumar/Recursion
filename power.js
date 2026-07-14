function power(x,n){
    if(n==0){
        return 1;
    }
    return x*power(x,n-1);
    

}
let x=2;
let n=5;
console.log(power(x,n));
