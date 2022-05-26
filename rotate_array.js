var arr = [1,2,3,4,5]

// o/p = [3,4,5,1,2]

var d = 2;

var i = 1

while(i<=d){
    
    rotate(arr)
    i++

}

console.log(arr)

function rotate(arr){

    var k = 0;
    var l = arr.length-1;

  

    while(k<=l){

       if(k!=l){
        var x = arr[k];
        arr[k] = arr[k+1];
        k++
        
       }
       else if(k==l){
           var x = arr[l]

       }



    }

    return arr

}