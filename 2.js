//no 2
function compress(str){
    let result ='';
    let count = 0;
    for (let i=0;i<str.length;i++){
        count++;
        if(str[i]!=str[i+1]){
            result = result + str[i] + count;
            count = 0;
        }
    }
    console.log(result)
}

compress('aaaaassssddddvvvvv')
