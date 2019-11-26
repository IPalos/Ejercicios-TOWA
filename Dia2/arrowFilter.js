arr = [1,2,3,4,5,6,7,8,9,1,10,11,12,13,14,15]
const  condition = item => item%3==0 && item>0;

let x= arr.filter(condition);
console.log(x)
