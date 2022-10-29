

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {

 let n = arr.length 
 let i, j, temp 

 let max = 0

 let DParr = new Array(n)

 //initialize the return array to 1 

 for(i=0; i<n; i++){
    DParr[i] = arr[i]
 }

 
 for(i=0; i < n; i++ ){
    let temp = 0
    if(arr[i] < 0)
        temp=+1  
 }

 if(temp === n)
    return 0 
    
 if(arr.length===1 && !arr[0]<0){
    max= a[0]
    return max  
 } 

for(i=0; i<n ; i++ ){
    for(j=1; j< i; j++){
        if((arr[j] !== arr[i-1] && arr[j]!== arr[i+1]) )
            DParr[i] = DParr[i]+arr[j]
    }
    if(max < DParr[i]){
        max = DParr[i]
    }
} 
 console.log(DParr)
return max
}




 const arr = [3, 5, -7, 8, 10]


 const test = maxSubsetSum(arr)
 console.log(test)

