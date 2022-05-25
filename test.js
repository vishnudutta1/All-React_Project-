
// var n = 2 ;

// for(var r = 0;r<=n;r++){
//     var arr = []
//     for(var c = 0;c<=n;c++){
//         if(r==0 || r==n || c==0 || c==n){
//             arr.push(n)
//         }
//        else if(r==1 || r==n-1 || c==1 ||c==n-1 )
//         {
//             arr.push(n-1)
//         }
//         else if(r==2 || r==n-2 || c==2 ||c==n-2 )
//         {
//             arr.push(n-2)
//         }


//         else if(r==3 || r==n-3 || c==3 ||c==n-3 )
//         {
//             arr.push(n-3)
//         }

//     }
//     console.log(arr.join(" "))
// }





// var input  = 4
// function runProgram(n) {
//   var mat = []
//   var num = n+n-1
//   for(var i = 0; i<num; i++){
//     var abc = []
//     for(var j = 0; j<num; j++){
//       abc.push(n)
//     }
//     mat.push(abc)
//   }
//   var left = 0
//   var right = num-1
//   var top = 0
//   var bottom = num-1
//   while(num>0){
//     for(var i = left; i<right; i++){
//       mat[i][top] = n
//     }
//     for(var i = top; i<bottom; i++){
//       mat[right][i] = n
//     }
//     for(var i = right; i>=left; i--){
//       mat[i][bottom] = n
//     }
//     for(var i = bottom; i>=top; i--){
//       mat[left][i] = n
//     }
//     n--;
//     left++;
//     right--;
//     top++;
//     bottom--;
//     num = num-2;
//   }
//   for(var i = 0; i<mat.length; i++){
//     console.log(mat[i].join(" "));
//   }
// }

// runProgram(input)




