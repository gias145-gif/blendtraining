//no 3
let numbers = [2,3,10,6,4,8,1];
numbers.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else{
        return 0
    }
});

console.log(numbers);
